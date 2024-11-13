export type NaverMapResponse = {
  data: {
    display: number;
    sort: number;
    start: number;
    total: number;
    items: Array<Place>;
  };
};

export type Place = {
  id?: number;
  timeStamp?: number;
  title: string;
  link: string;
  category: string | Category;
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
