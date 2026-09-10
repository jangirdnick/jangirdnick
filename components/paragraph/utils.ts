/**
 * Splits input text into clean word tokens, removing redundant whitespace.
 */
export function parseWords(text: string): string[] {
  return text.split(/\s+/).filter(Boolean);
}

/**
 * Calculates progressive scroll animation range [start, end] for a word based on its index.
 */
export function calculateWordRange(index: number, totalWords: number): [number, number] {
  const start = (index / Math.max(6, totalWords)) * 0;
  const end = Math.min(1, start + 1);
  return [start, end];
}

/**
 * Parses viewport percentage from offset string (e.g. "start 0.9" -> 90, "start 0.25" -> 25)
 */
export function parseViewportPercent(offsetStr: string | undefined, fallback: number): number {
  if (!offsetStr || typeof offsetStr !== 'string') return fallback;
  const parts = offsetStr.split(' ');
  if (parts.length < 2) return fallback;
  const valStr = parts[1];
  if (valStr.endsWith('%')) {
    return parseFloat(valStr);
  }
  const num = parseFloat(valStr);
  if (!isNaN(num)) {
    return num <= 1 ? num * 600 : num;
  }
  return fallback;
}
