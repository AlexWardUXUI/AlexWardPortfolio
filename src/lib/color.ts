/** WCAG 2.2 contrast helpers, used at build time to document every text colour. */

type RGB = [number, number, number];

export function parseColor(value: string): RGB | null {
  const hex = value.trim().match(/^#([0-9a-f]{6})$/i);
  if (hex?.[1]) {
    const h = hex[1];
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as RGB;
  }
  const rgb = value.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (rgb) return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  return null;
}

function luminance([r, g, b]: RGB): number {
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** Alpha of an rgba() colour, 1 for opaque colours. */
export function alphaOf(value: string): number {
  const m = value.match(/^rgba\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/i);
  return m?.[1] ? Number(m[1]) : 1;
}

/** Flattens a translucent colour over an opaque backdrop, returning a hex colour. */
export function composite(top: string, backdrop: string): string {
  const t = parseColor(top);
  const b = parseColor(backdrop);
  if (!t || !b) return backdrop;
  const a = alphaOf(top);
  const mix = t.map((c, i) => Math.round(c * a + (b[i] ?? 0) * (1 - a)));
  return '#' + mix.map((c) => c.toString(16).padStart(2, '0')).join('');
}

/** Contrast ratio between two opaque colours, rounded to 2dp. Null if either can't be parsed. */
export function contrast(fg: string, bg: string): number | null {
  const a = parseColor(fg);
  const b = parseColor(bg);
  if (!a || !b) return null;
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number];
  return Math.round(((l1 + 0.05) / (l2 + 0.05)) * 100) / 100;
}

export type WcagLevel = 'AAA' | 'AA' | 'AA large' | 'Fail';

/** The bar this site holds every text colour to: WCAG AAA for normal-size text. */
export const TARGET_RATIO = 7;

/** WCAG level for normal-size text. "AA large" means it only passes at 24px+ (or 18.66px+ bold). */
export function wcagLevel(ratio: number): WcagLevel {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA large';
  return 'Fail';
}
