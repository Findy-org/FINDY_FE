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
  title: string;
  link: string;
  category: string;
  description: string;
  telephone: string;
  address: string;
  roadAddress: string;
  mapx: string;
  mapy: string;
};
