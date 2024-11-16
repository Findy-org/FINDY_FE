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

export const DROPDOWN_CATEGORIES: { name: string; markerCategory: MarkerCategory | null }[] = [
  { name: '전체', markerCategory: null },
  { name: '음식점', markerCategory: 'restaurant' },
  { name: '카페', markerCategory: 'cafe' },
  { name: '술집', markerCategory: 'bar' },
  { name: '쇼핑', markerCategory: 'shopping' },
  { name: '여행', markerCategory: 'travel' },
  { name: '공공', markerCategory: 'public' },
  { name: '병원', markerCategory: 'hospital' },
  { name: '기타', markerCategory: 'other' },
];
