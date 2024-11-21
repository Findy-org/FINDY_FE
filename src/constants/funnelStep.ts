export const linkStepNames = ['입력전', '링크입력', '추출상태'] as const;
export type LinkStepType = (typeof linkStepNames)[number];
export const STEPS = {
  SEARCH_PLACES: '검색추출장소',
  EXTRACTED_PLACES: '추출장소',
  LIST_SELECT: '리스트선택',
  LIST: '리스트',
  BOOKMARK_DETAIL: '북마크조회',
} as const;

export type StepType = (typeof STEPS)[keyof typeof STEPS];

export const FLOW_CONFIGS = {
  search: {
    initialStep: STEPS.SEARCH_PLACES,
    steps: [STEPS.SEARCH_PLACES, STEPS.LIST_SELECT, STEPS.LIST, STEPS.BOOKMARK_DETAIL],
  },
  extract: {
    initialStep: STEPS.EXTRACTED_PLACES,
    steps: [STEPS.EXTRACTED_PLACES, STEPS.LIST, STEPS.BOOKMARK_DETAIL],
  },
  list: {
    initialStep: STEPS.LIST,
    steps: [STEPS.LIST, STEPS.BOOKMARK_DETAIL],
  },
} as const;

export type FlowType = keyof typeof FLOW_CONFIGS;
