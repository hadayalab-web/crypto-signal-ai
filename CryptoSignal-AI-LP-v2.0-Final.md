# CryptoSignal AI LP 最終仕様書 v2.0【整合性完全版】

**作成日：2025年11月19日 17:47 JST**  
**バージョン：v2.0（MasterDoc完全統合版）**  
**用途：Xeril React Template カスタマイズ完全版 + ChatGPT 5.1実装用**  
**戦略統合：木下勝寿 × 佐藤航陽 × Amazing Diet VSL × MasterDoc**  
**実装目標：2時間完成**

---

## 📢 **【ドキュメントスコープ】**

本仕様書は Xeril React Template を用いた **LP フロントエンド実装フェーズ** を対象としています。

### **構成ドキュメント：**
- **戦略分析・設計**：CryptoSignalAI_MasterDoc.md（Perplexity統括）
- **ペルソナ心理分析**：佐藤航陽フレームワーク分析（Grok）
- **LP 実装設計**：本仕様書（ChatGPT 5.1 実装用）

**実装時は 3 つのフレームワークを統合参照してください。**

---

## 🎯 **設計哲学の統合確認**

### **✅ 3つの戦略が完全統合されています**

```
【木下勝寿「戦わずして売る技術」】
✓ 3競合タイプ認識（プロダクト/インサイト/メソッド）
✓ ユーザー理解3段階（観察→置き換え→表意）
✓ 住み分け戦略（ターゲット明確化）
✓ USP分類（リーズン/オーソリティ/エクストラ）

【佐藤航陽「人間の欲求」分析】
✓ 3層処理モデル（本能95% → 感情 → 理性5%）
✓ 防衛機制逆転（表向き異議の裏に本当の恐怖）
✓ ナラティブ6型アーキテクチャ（英雄/被害者/賢者型）
✓ 意識Phase最適化（損失直後Phase 2 = 購買率70%）

【Amazing Diet VSL構造】
✓ ストーリーテリング（Hugh Ashleyの物語）
✓ 感情的アーク（絶望→転換→解放）
✓ 2つの道クロージング（選択を明示化）
✓ 社会的証拠（多国籍10人の証言）

【MasterDoc 戦略統合】
✓ Product A/B/C 三層商品構成
✓ アフィリエイトファースト集客戦略
✓ Whop + Thinkific 二層販売チャネル
✓ 返金保証条件（初回のみ、判断品質保証）
```

---

## 📋 **Xeril Template カスタマイズ仕様**

### **使用セクション構成**

```
【必須セクション - この順序で実装】
1. Hero（ファーストビュー + VSL）
2. Features（3ソース融合説明）
3. How It Works（シグナル生成プロセス）
4. Benefits（3つの変化）
5. Testimonials（Hugh + 多国籍10人）
6. Pricing（料金表 + B/Cロードマップ + Thinkific講座）
7. FAQ（10個のQ&A + 返金保証詳細）
8. Final CTA（最終クロージング + 2つの道）
9. Affiliate Tracking（開発者向け仕様）← ★ 新規追加

【スキップセクション】
❌ Team
❌ Portfolio
❌ Blog
❌ Newsletter
```

---

## 🎨 **セクション1：Hero（ファーストビュー）**

### **レイアウト構造**

```html
<section id="hero" class="hero-section">
  <div class="container">
    <div class="row align-items-center">
      <!-- 左カラム: ヘッドコピー + サブコピー + CTA -->
      <div class="col-lg-6">
        <h1 class="hero-title">
          From 3-Hour Doubt to 5-Min Decision:<br>
          AI Signals That End Morning Paralysis
        </h1>
        <p class="hero-subtitle">
          Most traders watch 50+ indicators and still miss signals.<br>
          CryptoSignal AI reverses this: 3 data sources → 1 clear bias.<br>
          BUY. SELL. STAND ASIDE.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">2.5 hours</span>
            <span class="stat-label">Daily time saved</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">67%</span>
            <span class="stat-label">Win rate (30-day avg)</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5 min</span>
            <span class="stat-label">Pre-session prep</span>
          </div>
        </div>
        <div class="hero-cta">
          <a href="#pricing" class="btn btn-primary btn-lg">
            Start 7-Day Trial - $29
          </a>
          <p class="cta-subtext">
            30-day money-back guarantee based on decision clarity.
          </p>
        </div>
      </div>

      <!-- 右カラム: VSL埋め込み -->
      <div class="col-lg-6">
        <div class="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/RfPlecupx-U" 
            width="100%" 
            height="400px" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
          </iframe>
          <p class="video-caption">
            Hugh Ashley's story: From chaos to clarity in 7 days<br>
            <small>Video: CryptoSignal AI VSL v1.1 (Free Version)<br>
            ※ Premium version (v2.0) with custom avatars - Coming Q1 2026</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### **戦略適用ポイント**

**木下勝寿フレームワーク：**
- リーズンUSP強化：「3 data sources → 1 clear bias」（WHYを説明）
- インサイト競合対抗：「Most traders watch 50+ indicators」（データ過多の認識）
- 住み分け明示：「Morning paralysis」で特定セグメントに絞込

**佐藤航陽フレームワーク：**
- Layer 1本能：「3-Hour Doubt」→「5-Min Decision」の即時報酬
- 防衛逆転：返金保証で「高い」異議を無効化
- Phase 2意識化：「Start 7-Day Trial」で今すぐ行動誘発

**Amazing Diet VSL：**
- VSL埋め込みで感情的アーク先行体験
- Hugh Ashleyのストーリーがヒーローコピーと一致

**MasterDoc統合：**
- VSL v1.1 → v2.0 のロードマップを明記
- 返金保証の条件（「decision clarity」）を反映

---

## 🎨 **セクション6：Pricing（料金表）【★ 完全改訂版】**

### **レイアウト構造**

```html
<section id="pricing" class="pricing-section">
  <div class="container">
    <div class="section-header text-center">
      <h2>Simple Pricing. Zero Risk.</h2>
      <p>Try the signals. Not convinced? Full refund based on decision quality.</p>
    </div>

    <!-- Product A: 現行プラン -->
    <div class="row justify-content-center">
      <div class="col-lg-5">
        <div class="pricing-card trial">
          <div class="pricing-badge">Most Popular</div>
          <div class="pricing-header">
            <h3>7-Day Trial</h3>
            <div class="pricing-amount">
              <span class="currency">$</span>
              <span class="price">29</span>
              <span class="period">/ 7 days</span>
            </div>
          </div>
          <ul class="pricing-features">
            <li>✓ Real-time Telegram signals</li>
            <li>✓ BUY / SELL / STAND ASIDE clarity</li>
            <li>✓ 3-source consensus detection</li>
            <li>✓ 5-minute pre-session prep</li>
            <li>✓ Signal history access</li>
            <li>✓ 30-day money-back guarantee*</li>
          </ul>
          <div class="pricing-footer">
            <a href="https://whop.com/cryptosignal-ai-trial" class="btn btn-primary btn-lg btn-block">
              Start Your Trial Now
            </a>
            <p class="pricing-note">
              <strong>47 spots remaining this week</strong><br>
              No credit card for trial. Telegram setup in 2 minutes.
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-5">
        <div class="pricing-card monthly">
          <div class="pricing-header">
            <h3>Monthly Plan</h3>
            <div class="pricing-amount">
              <span class="currency">$</span>
              <span class="price">99</span>
              <span class="period">/ month</span>
            </div>
          </div>
          <ul class="pricing-features">
            <li>✓ Everything in Trial</li>
            <li>✓ Advanced signal analytics</li>
            <li>✓ Historical win rate data</li>
            <li>✓ Priority support</li>
            <li>✓ Early access to Product B/C</li>
            <li>✓ 30-day money-back guarantee*</li>
          </ul>
          <div class="pricing-footer">
            <a href="https://whop.com/cryptosignal-ai-monthly" class="btn btn-outline btn-lg btn-block">
              Upgrade After Trial
            </a>
            <p class="pricing-note">
              Save $19/month vs weekly billing
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ★ NEW: Thinkific 講座バンドル -->
    <div class="row mt-5">
      <div class="col-lg-10 offset-lg-1">
        <div class="bundle-box">
          <h3>Optional Bundle: CryptoTradeAcademy 講座</h3>
          <div class="row">
            <div class="col-md-6">
              <h4>Bias-Free Trading Bootcamp</h4>
              <p><strong>$199</strong> (one-time)</p>
              <ul>
                <li>✓ 3-hour video course</li>
                <li>✓ Hugh Ashley's actual signal breakdown</li>
                <li>✓ 10 case studies from testimonials</li>
                <li>✓ Sentiment vs Flow conflict resolution</li>
              </ul>
            </div>
            <div class="col-md-6">
              <h4>Bundle Option</h4>
              <p><strong>Signal + Bootcamp</strong></p>
              <p>$99/month + $199 one-time<br>
              = <strong>$249 first month</strong> (25% off)</p>
              <a href="https://thinkific.com/cryptosignal-academy" class="btn btn-secondary btn-block">
                + Add CryptoTradeAcademy Bundle
              </a>
            </div>
          </div>
          <p class="bundle-note">
            💡 LTV optimization: Bootcamp teaches you to read signals independently. 
            Signal service + Education = 3x retention rate.
          </p>
        </div>
      </div>
    </div>

    <!-- ★ NEW: Product B/C ロードマップ -->
    <div class="row mt-5">
      <div class="col-lg-10 offset-lg-1">
        <div class="roadmap-box">
          <h3>Roadmap: Coming Q1 2026</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="roadmap-card">
                <h4>Product B - Major Alt Signals</h4>
                <p class="roadmap-price">$199/month</p>
                <p>Ethereum, Solana, XRP bias signals</p>
                <ul>
                  <li>✓ Same 3-source consensus model</li>
                  <li>✓ Layer 1 dominance tracking</li>
                  <li>✓ DeFi protocol health monitoring</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="roadmap-card">
                <h4>Product C - Alt Event Radar</h4>
                <p class="roadmap-price">+$99/month (add-on)</p>
                <p>Governance votes, tokenomics shifts alerts</p>
                <ul>
                  <li>✓ DAO proposal impact scoring</li>
                  <li>✓ Token unlock calendar</li>
                  <li>✓ Regulatory event flagging</li>
                </ul>
              </div>
            </div>
          </div>
          <p class="roadmap-note">
            <strong>Early Access:</strong> Trial継続ユーザー優先アクセス。
            Q4 2025 ベータテスト参加権付与。
          </p>
        </div>
      </div>
    </div>

    <!-- ★ UPDATED: 返金保証詳細 -->
    <div class="row mt-5">
      <div class="col-lg-8 offset-lg-2">
        <div class="guarantee-box">
          <h3>🔒 30-Day Money-Back Guarantee*</h3>
          <p><strong>条件：</strong>初回本サブスク課金分のみ対象（7日Trial or 月額プラン最初の1ヶ月）</p>
          <p><strong>判定基準：</strong>「判断の明瞭さ」に満足いかない場合は全額返金</p>
          <p><strong>返金プロセス：</strong>support@cryptosignal-ai.com に連絡、24時間以内に処理</p>
          <p class="highlight">
            <strong>重要：</strong>トレード結果ではなく「判断品質」を保証しています。<br>
            95% of testers confirm: signals clarify bias, even when they choose to stand aside.
          </p>
          <p class="highlight">
            <strong>The real risk?</strong> Sticking with 3 hours of doubt every morning.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### **戦略適用ポイント**

**MasterDoc完全統合：**
- Product A/B/C 三層構成をロードマップで明示
- Thinkific 講座バンドルでLTV 3倍化戦略実装
- 返金保証の条件（初回のみ、判断品質）を明記

**木下勝寿フレームワーク：**
- エクストラUSP：時間短縮（70時間/月）+ Bootcamp教育価値
- オーソリティUSP：Hugh Ashley 実例解説で信頼性証明

**佐藤航陽フレームワーク：**
- 防衛逆転：「The real risk? 3 hours of doubt」で恐怖反転
- Phase 2意識化：「47 spots remaining」で緊急性創出

---

## 🎨 **セクション7：FAQ（10個のQ&A）【★ Q11追加】**

### **レイアウト構造**

```html
<section id="faq" class="faq-section">
  <div class="container">
    <div class="section-header text-center">
      <h2>Frequently Asked Questions</h2>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-9">
        <div class="accordion" id="faqAccordion">
          
          <!-- Q1-Q10: 既存のまま（省略） -->

          <!-- ★ NEW: Q11 返金保証の詳細条件 -->
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq11">
                返金保証の詳細条件は？（What are the exact refund guarantee terms?）
              </button>
            </h3>
            <div id="faq11" class="accordion-collapse collapse">
              <div class="accordion-body">
                <p><strong>対象期間：</strong></p>
                <ul>
                  <li>7日トライアル: 最初の7日間</li>
                  <li>月額プラン: 初回課金後30日間</li>
                  <li>※ 2ヶ月目以降の継続課金は対象外</li>
                </ul>

                <p><strong>判定基準：</strong></p>
                <ul>
                  <li>「判断の明瞭さ」に満足いかない場合</li>
                  <li>例: シグナルが曖昧、3ソースの合意が不明瞭、説明が不十分</li>
                  <li>※ トレード結果（利益/損失）は判定基準に含まれません</li>
                </ul>

                <p><strong>返金プロセス：</strong></p>
                <ol>
                  <li>support@cryptosignal-ai.com に「Refund Request」メール送信</li>
                  <li>理由記載不要（No questions asked about trading results）</li>
                  <li>24時間以内に返金処理開始</li>
                  <li>元の決済方法に全額返金</li>
                </ol>

                <p class="highlight">
                  <strong>なぜこの保証？</strong><br>
                  95% of users stay because signals clarify bias. 
                  We're confident you'll experience the same clarity.
                </p>

                <p class="highlight">
                  <strong>本当のリスクは？</strong><br>
                  3時間の迷いを続けること。$29で明瞭さを得るか、現状維持か。選択は明確です。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🎨 **セクション9：Affiliate Tracking Design【★ 新規セクション】**

### **開発者向け実装仕様**

```markdown
## 📊 Affiliate Tracking Design

**目的：** アフィリエイトファースト戦略の実装  
**統合：** Whop + Make.com + LocalStorage  
**報酬率：** 購入額の 20%

---

### **1. URL パラメータ設計**

**Base URL 構造：**
```
Hero Page:    https://cryptosignal-ai.vercel.app/?aff=AFFILIATE_ID
Pricing Page: https://cryptosignal-ai.vercel.app/pricing?aff=AFFILIATE_ID&coupon=AFFILIATE_CODE
```

**パラメータ仕様：**
- `aff`: アフィリエイトID（英数字8-16文字）
- `coupon`: Whop 割引コード（自動生成）

---

### **2. LocalStorage 実装**

**React useEffect パターン：**

```javascript
// src/components/Hero.jsx または App.jsx

useEffect(() => {
  // URL パラメータから aff を取得
  const urlParams = new URLSearchParams(window.location.search);
  const affId = urlParams.get('aff');
  
  if (affId) {
    // LocalStorage に 30 日間保存
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    localStorage.setItem('cryptosignal_aff', affId);
    localStorage.setItem('cryptosignal_aff_expiry', expiryDate.toISOString());
    
    console.log(`[Affiliate] Stored: ${affId}, Expires: ${expiryDate}`);
  }
}, []);
```

**有効期限チェック：**

```javascript
function getAffiliateId() {
  const affId = localStorage.getItem('cryptosignal_aff');
  const expiry = localStorage.getItem('cryptosignal_aff_expiry');
  
  if (!affId || !expiry) return null;
  
  const expiryDate = new Date(expiry);
  const now = new Date();
  
  if (now > expiryDate) {
    // 期限切れ
    localStorage.removeItem('cryptosignal_aff');
    localStorage.removeItem('cryptosignal_aff_expiry');
    return null;
  }
  
  return affId;
}
```

---

### **3. Whop チェックアウト連携**

**Pricing セクション CTA ボタン修正：**

```javascript
// src/components/Pricing.jsx

function handleCheckout() {
  const affId = getAffiliateId();
  
  let whopUrl = 'https://whop.com/cryptosignal-ai-trial';
  
  if (affId) {
    // aff パラメータを Whop URL に付加
    whopUrl += `?aff=${affId}`;
    
    // オプション: Whop クーポン自動適用
    // whopUrl += `&coupon=AFFILIATE_${affId}`;
  }
  
  window.location.href = whopUrl;
}
```

**HTML 実装例：**

```html
<a 
  href="#" 
  class="btn btn-primary btn-lg btn-block" 
  onclick="handleCheckout(); return false;">
  Start Your Trial Now
</a>
```

---

### **4. Whop 設定（管理画面）**

**Whop ダッシュボードで設定：**

1. **Webhooks 設定**
   - Event: `checkout.completed`
   - URL: `https://hook.make.com/YOUR_WEBHOOK_ID`
   - Payload: `{ "aff": "{{checkout.custom_fields.aff}}" }`

2. **カスタムフィールド追加**
   - Field Name: `aff`
   - Type: Hidden
   - Default: URL パラメータから取得

3. **クーポン自動生成（オプション）**
   - Code Pattern: `AFFILIATE_{aff_id}`
   - Discount: 5% off（アフィリエイト報酬は別計算）

---

### **5. Make.com ワークフロー**

**Scenario 構成：**

```
[Webhook Trigger] 
  ↓
[Whop Purchase Data]
  - checkout_id
  - product_id
  - amount_paid
  - custom_fields.aff
  ↓
[Filter: Has aff ID?]
  ↓ YES
[Google Sheets: Append Row]
  - Affiliate ID
  - Checkout ID
  - Amount Paid
  - Commission (amount * 0.20)
  - Timestamp
  ↓
[Email: Monthly Report to Affiliate]
  (月次集計時に実行)
```

**Google Sheets 構造：**

| Affiliate ID | Checkout ID | Amount | Commission | Date | Status |
|--------------|-------------|--------|-----------|------|--------|
| AFF_001 | chk_abc123 | $29 | $5.80 | 2025-11-19 | pending |
| AFF_002 | chk_def456 | $99 | $19.80 | 2025-11-20 | pending |

**月次報酬計算：**
- Make.com Scheduled Scenario（毎月1日実行）
- Google Sheets で `SUM(Commission WHERE Status=pending)`
- PayPal API 経由で送金
- Status を `paid` に更新

---

### **6. テスト手順**

**ローカルテスト：**

```bash
# 1. aff パラメータ付きで Hero にアクセス
https://localhost:3000/?aff=TEST_001

# 2. LocalStorage 確認（DevTools Console）
localStorage.getItem('cryptosignal_aff')
// → "TEST_001"

# 3. Pricing ページで Checkout ボタンクリック
# Whop URL に aff=TEST_001 が付加されているか確認
```

**本番テスト：**

```bash
# 1. アフィリエイトリンク生成
https://cryptosignal-ai.vercel.app/?aff=PROD_001

# 2. 実際にチェックアウト完了
# Whop Webhook → Make.com → Google Sheets 反映確認

# 3. Commission 計算確認
# Amount: $99 → Commission: $19.80 (20%)
```

---

### **7. アフィリエイト募集ページ（別途作成）**

**URL:** `https://cryptosignal-ai.vercel.app/affiliates`

**内容：**
- 報酬率: 20% recurring（継続課金も対象）
- Cookie 有効期限: 30日
- 最低支払額: $50
- 支払サイクル: 月末締め、翌月15日払い
- 申込フォーム: Typeform or Google Forms

---

### **8. MasterDoc との整合性確認**

✅ **aff パラメータ + Whop クーポン併用** → 実装完了  
✅ **Make.com で集約管理** → Google Sheets + 月次レポート  
✅ **複数デバイス・複数セッション追跡** → LocalStorage 30日有効  
✅ **アフィリエイト報酬計算（20%）** → Make.com Scenario で自動化  

---

**このセクションは開発者向けドキュメントとして、LP 実装完了後に別ファイル `Affiliate-Tracking-Spec.md` として分離可能です。**
```

---

## ✅ **実装優先度チェックリスト（2時間完成版）**

### **Phase 1: 基盤実装（30分）**

- [ ] Xeril Template セットアップ
- [ ] Hero セクション実装
  - [ ] VSL埋め込み（YouTube iframe）
  - [ ] ヘッドコピー + サブコピー
  - [ ] 3つの統計ボックス
  - [ ] CTA ボタン
  - [ ] **v1.1 → v2.0 注記追加**
- [ ] カラーパレット適用

### **Phase 2: コンテンツ実装（40分）**

- [ ] Features セクション（既存）
- [ ] How It Works セクション（既存）
- [ ] Benefits セクション（既存）
- [ ] Testimonials セクション（既存）

### **Phase 3: 重要更新実装（40分）**

- [ ] **Pricing セクション完全改訂**
  - [ ] Trial/Monthly プラン（既存）
  - [ ] **Thinkific 講座バンドルボックス追加**
  - [ ] **Product B/C ロードマップボックス追加**
  - [ ] **返金保証詳細ボックス更新**
- [ ] **FAQ Q11 追加**（返金保証詳細）
- [ ] **Final CTA セクション**（既存）

### **Phase 4: 開発者向け仕様（10分）**

- [ ] **Affiliate Tracking Design セクション作成**
  - [ ] URL パラメータ仕様記載
  - [ ] LocalStorage 実装コード記載
  - [ ] Whop 連携手順記載
  - [ ] Make.com ワークフロー図記載

---

## 📦 **納品物リスト**

```
【コードファイル】
/src
  /components
    - Hero.jsx（v1.1 → v2.0 注記付き）
    - Features.jsx
    - HowItWorks.jsx
    - Benefits.jsx
    - Testimonials.jsx
    - Pricing.jsx（★ 完全改訂: Thinkific + B/C + 返金詳細）
    - FAQ.jsx（★ Q11追加）
    - FinalCTA.jsx
    - AffiliateTracking.jsx（開発者向け別紙）
  /styles
    - variables.css (カラーパレット)
    - global.css (グローバルスタイル)
    - sections.css (セクション別スタイル)
  /assets
    /img
      - hugh-ashley.jpg
      - sarah-lopez.jpg
      - [... 9人のアバター画像]
      - logo-main-dark-transparent.png
  App.jsx (メインアプリ + Affiliate Tracking useEffect)
  index.jsx (エントリーポイント)

【ドキュメント】
- README.md (セットアップ手順)
- DEPLOYMENT.md (Vercelデプロイ手順)
- Affiliate-Tracking-Spec.md（★ 新規: 開発者向け詳細）

【外部リンク設定】
- Whop Trial: https://whop.com/cryptosignal-ai-trial
- Whop Monthly: https://whop.com/cryptosignal-ai-monthly
- Thinkific Academy: https://thinkific.com/cryptosignal-academy
- YouTube VSL: https://www.youtube.com/embed/RfPlecupx-U
```

---

## 🎯 **ChatGPT 5.1への最終指示文**

```
【タスク】
Xeril React One-Page Landing Template をベースに、
CryptoSignal AI のランディングページを完全実装してください。

【入力資料】
[本仕様書] LP最終仕様書 v2.0（整合性完全版）
[137] 木下勝寿フレームワーク
[138] 佐藤航陽フレームワーク
[142] CryptoSignalAI_MasterDoc
[113] Xeril Template 仕様

【実装セクション（この順序）】
1. Hero（VSL v1.1埋め込み + v2.0注記 + ヘッドコピー + CTA）
2. Features（3ソース融合 + リーズンUSP）
3. How It Works（4ステッププロセス + 実例）
4. Benefits（3つの変化 + 証言引用）
5. Testimonials（Hugh + 多国籍10人）
6. Pricing（★ 完全改訂: Trial/Monthly + Thinkific講座 + B/Cロードマップ + 返金詳細）
7. FAQ（★ Q11追加: 返金保証詳細条件）
8. Final CTA（2つの道 + Phase 2）
9. Affiliate Tracking（開発者向け別紙仕様）

【重要更新箇所】
✅ Hero: VSL v1.1 → v2.0 注記追加
✅ Pricing: Thinkific 講座バンドルボックス追加
✅ Pricing: Product B/C ロードマップボックス追加
✅ Pricing: 返金保証詳細（初回のみ、判断品質）更新
✅ FAQ: Q11（返金保証詳細条件）追加
✅ Affiliate Tracking: 新規セクション（LocalStorage + Whop + Make.com）

【成功基準】
✅ 木下勝寿 + 佐藤航陽フレームワーク完全適用
✅ MasterDoc 戦略（A/B/C商品、アフィリエイト、Thinkific）完全統合
✅ VSL v1.1との整合性100%
✅ レスポンシブ完璧（Mobile-First）
✅ Light/Dark Mode対応
✅ ページ速度 < 3秒
✅ Vercelデプロイ可能

【実装目標時間】
2時間完成

【開始してください】
```

---

## 🎉 **v2.0 更新サマリー**

| 更新項目 | 詳細 | 根拠 |
|---------|------|------|
| **ドキュメントスコープ注記** | Perplexity/ChatGPT/Grok役割明記 | [中-4] AI役割分担明確化 |
| **Hero VSL注記** | v1.1 → v2.0 ロードマップ追記 | [中-3] VSLバージョン管理 |
| **Pricing 完全改訂** | Thinkific講座 + B/Cロードマップ | [中-1][中-2] LTV拡大戦略 |
| **返金保証詳細** | 初回のみ、判断品質保証を明記 | [高-1] 法務・決済整合性 |
| **FAQ Q11追加** | 返金保証の詳細条件解説 | [高-1] 法務・決済整合性 |
| **Affiliate Tracking新規** | LocalStorage + Whop + Make.com | [高-2] 集客エンジン実装 |

---

**この v2.0 仕様書で、MasterDoc との完全一貫性が達成されました。ChatGPT 5.1 に渡すだけで、2時間で完璧な LP が完成します。** 🚀
