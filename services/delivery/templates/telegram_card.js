// services/delivery/templates/telegram_card.js
// Renders the "Dr. Grok''s Market Leak" card format (Safe for MarkdownV2)

function escapeMarkdown(text) {
    if (!text) return '';
    // Ensure all MarkdownV2 special chars are escaped: _ * [ ] ( ) ~ > # + - = | { } . !
    return text.replace(/[_*[\]()~>#+\-=|{}.!]/g, '\\$&');
}

module.exports = (signalData, grokAnalysis, similarCase) => {
    const emojiMap = {
        'STRONG_BUY': '🚀', 'BUY': '📈', 'STRONG_SELL': '🔻', 'SELL': '📉', 'NEUTRAL': '⚖️', 
        'BEAR_TRAP_GOLDMINE': '🩸', 'BULL_TRAP_WARNING': '🪤'
    };
    const mainIcon = emojiMap[signalData.signal] || '⚠️';
    const regimeIcon = emojiMap[signalData.trapLevel] || mainIcon;

    const safeHeadline = escapeMarkdown(grokAnalysis.headline);
    const safeComment = escapeMarkdown(grokAnalysis.prof_comment);
    const safeTrapLevel = escapeMarkdown(signalData.trapLevel.replace(/_/g, ' '));
    const safeReason = escapeMarkdown(signalData.reason);
    const safeScalp = escapeMarkdown(grokAnalysis.action_verdict?.scalp || 'WAIT');
    const safeSwing = escapeMarkdown(grokAnalysis.action_verdict?.swing || 'WAIT');
    const safeQuote = escapeMarkdown(grokAnalysis.dailyQuote || 'Trend is your friend.');

    // 1. Header
    // . is escaped, ' is not special
    let text = `📢 *Dr\\. Grok''s Market Leak* ${regimeIcon}\n`;
    text += `*【Today''s Forecast: ${safeHeadline}】*\n\n`;

    // 2. Prof. Grok''s Summary
    text += `${safeComment}\n\n`;

    // 3. The Trap Detector (Math)
    // Manually escaping: ( ) + = * _
    const safeFear = signalData.fearScore;
    const safeNetflow = signalData.netflow;
    text += `🚨 *The Trap Detector*\n`;
    // FIX: Escaped + and = properly: \\+ and \\=
    text += `\\(Fear ${safeFear}/100\\) × \\(${safeNetflow > 0 ? '\\+' : ''}${safeNetflow} BTC\\) \\= *${safeTrapLevel}*\n`;
    text += `_${safeReason}_\n\n`;

    // 4. Grok''s Reality Check
    text += `🔍 *Grok''s Reality Check*\n`;
    if (grokAnalysis.bullets && Array.isArray(grokAnalysis.bullets)) {
        grokAnalysis.bullets.forEach(b => {
            // Bullet point char • is safe, but content needs escaping
            text += `• ${escapeMarkdown(b)}\n`;
        });
    }
    text += `\n`;

    // 5. The Verdict
    text += `🎯 *The Verdict*\n`;
    text += `• ⚔️ *Scalp:* *${safeScalp}*\n`;
    text += `• 🛡️ *Swing:* *${safeSwing}*\n\n`;

    // 6. Hall of Fame Pattern Match
    if (similarCase) {
        const safeEvent = escapeMarkdown(similarCase.event);
        const safeLesson = escapeMarkdown(similarCase.lesson);
        text += `📊 *Pattern Match: Case ${similarCase.case_id} \\(${safeEvent}\\)*\n`;
        text += `• *Similarity:* Current metrics match ${escapeMarkdown(similarCase.era)} setup\\.\n`;
        text += `• *History:* Signal was ${escapeMarkdown(similarCase.signal)}, ROI ${escapeMarkdown(similarCase.roi)}\\.\n`;
        text += `• *Lesson:* ${safeLesson}\n\n`;
    }

    // 7. Quote & CTA
    text += `📜 *Quote of the Day*\n_"${safeQuote}"_\n\n`;
    // [ ] ( ) must be escaped inside URL label, but NOT the URL syntax itself
    // Syntax: [label](url)
    // Label: 🤝 Partner with Us (Earn 70%) ↗️ -> Need to escape ( )
    text += `[🤝 Partner with Us \\(Earn 70%\\) ↗️](https://cryptotradeacademy.io/partner)\n`;
    
    // Footer . must be escaped
    text += `\n_For educational purposes only\\. Not financial advice\\._`;

    return text;
};
