import axios, { AxiosInstance } from "axios";
import { CqOnChainMetrics, CqDerivativesMetrics } from "../../types/providers";

export type CryptoQuantData = {
  onChain: CqOnChainMetrics;
  derivatives: CqDerivativesMetrics;
};

export interface CryptoQuantClient {
  fetchMetrics(symbol: string, windowMinutes: number): Promise<CryptoQuantData>;
}

/**
 * v1 用ダミー実装
 * - ローカル開発やテストで使用
 */
export class DummyCryptoQuantClient implements CryptoQuantClient {
  async fetchMetrics(
    symbol: string,
    windowMinutes: number,
  ): Promise<CryptoQuantData> {
    console.log("[DummyCryptoQuantClient] fetchMetrics", {
      symbol,
      windowMinutes,
    });

    return {
      onChain: {
        exchangeNetflow: -1.5,
        stablecoinNetflow: 2.0,
        minerOutflow: -0.5,
        longTermHolderActivity: 0.3,
      },
      derivatives: {
        fundingRate: 0.01,
        openInterestChange: 0.08,
        longShortRatio: 1.2,
      },
    };
  }
}

/**
 * HttpCryptoQuantClient v1.3 (Pro plan, daily window, netflow_total)
 */
export class HttpCryptoQuantClient implements CryptoQuantClient {
  private http: AxiosInstance;

  private static readonly EXCHANGE_NETFLOW_PATH =
    "/v1/btc/exchange-flows/netflow";

  constructor(apiKey: string, baseUrl?: string) {
    if (!apiKey) {
      throw new Error(
        "CRYPTOQUANT_API_KEY is required for HttpCryptoQuantClient",
      );
    }

    this.http = axios.create({
      baseURL:
        baseUrl ?? process.env.CRYPTOQUANT_BASE_URL ?? "https://api.cryptoquant.com",
      timeout: 10000,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
  }

  async fetchMetrics(
    symbol: string,
    windowMinutes: number,
  ): Promise<CryptoQuantData> {
    console.log("[HttpCryptoQuantClient] fetchMetrics", {
      symbol,
      windowMinutes,
    });

    try {
      const exchangeNetflowRaw = await this.getNumber(
        HttpCryptoQuantClient.EXCHANGE_NETFLOW_PATH,
        {
          window: "day",
          exchange: "all_exchange",
        },
      );

      const onChain: CqOnChainMetrics = {
        exchangeNetflow: exchangeNetflowRaw,
        stablecoinNetflow: 0,
        minerOutflow: 0,
        longTermHolderActivity: 0,
      };

      const derivatives: CqDerivativesMetrics = {
        fundingRate: 0,
        openInterestChange: 0,
        longShortRatio: 1,
      };

      return { onChain, derivatives };
    } catch (err) {
      console.error(
        "[HttpCryptoQuantClient] fetchMetrics failed, falling back to dummy",
        err,
      );
      const dummy = new DummyCryptoQuantClient();
      return dummy.fetchMetrics(symbol, windowMinutes);
    }
  }

  /**
   * 単一数値を返すエンドポイント用 GET ヘルパー
   * - /v1/btc/exchange-flows/netflow 用に最適化
   *   - res.data.result.data は日足データ配列
   *   - 先頭要素の netflow_total を採用
   */
  private async getNumber(
    path: string,
    params?: Record<string, string>,
  ): Promise<number> {
    const maxRetries = 2;
    let lastError: unknown;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const res = await this.http.get(path, { params });

        const rows = res.data?.result?.data as
          | { date: string; netflow_total: number }[]
          | undefined;

        const value = rows?.[0]?.netflow_total;

        if (typeof value !== "number" || Number.isNaN(value)) {
          throw new Error(
            `Unexpected response format for ${path}: missing netflow_total`,
          );
        }

        return value;
      } catch (err) {
        lastError = err;
        console.warn("[HttpCryptoQuantClient] GET failed", {
          path,
          attempt: attempt + 1,
        });
        if (attempt === maxRetries) {
          break;
        }
        await new Promise((resolve) =>
          setTimeout(resolve, 500 * (attempt + 1)),
        );
      }
    }

    throw lastError;
  }
}
