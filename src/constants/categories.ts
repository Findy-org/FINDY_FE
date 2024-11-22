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

export const DROPDOWN_CATEGORIES: { name: string }[] = [
  { name: '전체' },
  { name: '음식점' },
  { name: '카페' },
  { name: '술집' },
  { name: '쇼핑' },
  { name: '여행' },
  { name: '공공' },
  { name: '병원' },
  { name: '기타' },
];
