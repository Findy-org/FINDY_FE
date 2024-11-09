type CategoryType =
  | 'restaurant'
  | 'cafe'
  | 'bar'
  | 'shopping'
  | 'public'
  | 'travel'
  | 'hospital'
  | 'other';

const CATEGORY_REGEX_MAPPING: Record<Exclude<CategoryType, 'other'>, RegExp> = {
  restaurant: /음식점|한식|중식|양식|일식/,
  cafe: /카페|디저트/,
  bar: /술집/,
  shopping: /쇼핑|유통/,
  public: /공공|교육|사회/,
  travel: /명소|여행/,
  hospital: /병원|의원/,
} as const;

export const parseCategory = (categoryName: string): string => {
  for (const [category, regex] of Object.entries(CATEGORY_REGEX_MAPPING)) {
    if (regex.test(categoryName)) {
      return category;
    }
  }

  return 'other';
};
