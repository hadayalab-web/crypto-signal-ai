import axios, { AxiosInstance } from "axios";
import { GrokSentimentMetrics } from "../../types/providers";

export interface GrokClient {
  fetchSentiment(symbol: string, windowMinutes: number): Promise<GrokSentimentMetrics>;
}

/**
 * v1用ダミー実装（既存）
 */
export class DummyGrokClient implements GrokClient {
  async fetchSentiment(symbol: string, windowMinutes: number): Promise<GrokSentimentMetrics> {
    console.log("[DummyGrokClient] fetchSentiment", { symbol, windowMinutes });

    return {
      sentimentScore: 0.6,
      mentionVolumeScore: 0.7,
      narrativeRiskScore: 0.2,
    };
  }
}

/**
 * HttpGrokClient v1 骨格
 * - xAI / Grok API を叩いて X(Twitter) 上のセンチメントを集約する想定
 * - 現時点では、単一のプロンプトでシンボル関連ツイートのセンチメント要約を取得するイメージ
 * - 実際のエンドポイント/モデル名は xAI のAPIドキュメントに合わせて修正すること
 */
export class HttpGrokClient implements GrokClient {
  private http: AxiosInstance;
  private model: string;

  constructor(apiKey: string, model?: string, baseUrl?: string) {
    if (!apiKey) {
      throw new Error("XAI_API_KEY is required for HttpGrokClient");
    }

    this.http = axios.create({
      baseURL: baseUrl ?? process.env.XAI_API_BASE_URL ?? "https://api.x.ai/v1",
      timeout: 20000,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    // TODO: 実際に利用するGrokモデル名に合わせてデフォルトを変更
    this.model = model ?? (process.env.XAI_MODEL ?? "grok-3-latest");
  }

  async fetchSentiment(symbol: string, windowMinutes: number): Promise<GrokSentimentMetrics> {
    console.log("[HttpGrokClient] fetchSentiment", { symbol, windowMinutes, model: this.model });

    // TODO: 実際のエンドポイント・リクエスト形式に合わせて修正
    // ここでは OpenAI-style の /chat/completions を仮定した骨格を置いておく
    const prompt = this.buildPrompt(symbol, windowMinutes);

    try {
      const res = await this.http.post("/chat/completions", {
        model: this.model,
        messages: [
          {
            role: "system",
            content:
              "You are a crypto market sentiment analyzer. Return a strict JSON object describing sentiment around a given symbol on X (Twitter).",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        // streamingはv1では使わない
      });

      const content = this.extractAssistantContent(res.data);
      const parsed = this.safeParseMetrics(content);

      return parsed;
    } catch (err) {
      console.error("[HttpGrokClient] fetchSentiment failed, falling back to dummy", err);
      const dummy = new DummyGrokClient();
      return dummy.fetchSentiment(symbol, windowMinutes);
    }
  }

  private buildPrompt(symbol: string, windowMinutes: number): string {
    return [
      `Analyze recent X (Twitter) posts about the crypto pair ${symbol}.`,
      `Focus on the last ${windowMinutes} minutes of activity.`,
      "",
      "Return ONLY a strict JSON object with the following fields (no extra text):",
      "",
      "{",
      '  "sentimentScore": number,      // -1.0 (very bearish) to +1.0 (very bullish)',
      '  "mentionVolumeScore": number,  // 0.0 (silent) to 1.0 (extremely active)',
      '  "narrativeRiskScore": number   // 0.0 (no FUD / hype) to 1.0 (extreme FUD or hype)',
      "}",
    ].join("\n");
  }

  /**
   * OpenAI互換のレスポンスを想定して content を取り出す
   * 実際の xAI / Grok のレスポンス構造に合わせてこのメソッドを調整すること
   */
  private extractAssistantContent(data: any): string {
    const content =
      data?.choices?.[0]?.message?.content ??
      data?.choices?.[0]?.delta?.content ??
      data?.output_text;

    if (typeof content !== "string") {
      throw new Error("Unexpected Grok response format: missing assistant content");
    }
    return content.trim();
  }

  /**
   * モデルから返ってきたテキストを JSON としてパースし、GrokSentimentMetrics にマッピング
   */
  private safeParseMetrics(text: string): GrokSentimentMetrics {
    try {
      const obj = JSON.parse(text);

      const sentimentScore = this.clampNumber(obj.sentimentScore, -1, 1, 0);
      const mentionVolumeScore = this.clampNumber(obj.mentionVolumeScore, 0, 1, 0.5);
      const narrativeRiskScore = this.clampNumber(obj.narrativeRiskScore, 0, 1, 0.3);

      return {
        sentimentScore,
        mentionVolumeScore,
        narrativeRiskScore,
      };
    } catch (err) {
      console.error("[HttpGrokClient] Failed to parse Grok JSON output, fallback to neutral metrics", err);
      return {
        sentimentScore: 0,
        mentionVolumeScore: 0.5,
        narrativeRiskScore: 0.3,
      };
    }
  }

  private clampNumber(value: any, min: number, max: number, fallback: number): number {
    const num = typeof value === "number" ? value : Number(value);
    if (Number.isNaN(num)) return fallback;
    return Math.max(min, Math.min(max, num));
  }
}
