export const MARKER_CATEGORIES = [
  'restaurant',
  'cafe',
  'bar',
  'shopping',
  'travel',
  'public',
  'hospital',
  'other',
] as const;
export type MarkerCategory = (typeof MARKER_CATEGORIES)[number];
