export function formatTelegramMessage(input: unknown): string {
  try {
    return typeof input === "string" ? input : JSON.stringify(input);
  } catch {
    return String(input);
  }
}
export default formatTelegramMessage;
