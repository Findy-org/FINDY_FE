export type NaverMapResponse = {
  display: number;
  sort: number;
  start: number;
  total: number;
  items: Place[];
};

export type Place = {
  id?: number;
  timeStamp?: number;
  title: string;
  link: string;
  category: Category | string;
  description: string;
  telephone: string;
  address: string;
  roadAddress: string;
  mapx: string;
  mapy: string;
};

export type Category = {
  majorCategory: string;
  middleCategory: string;
};
