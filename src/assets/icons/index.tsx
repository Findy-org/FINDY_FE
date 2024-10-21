import Bar from './bar.svg?react';
import EmptyBookMark from './bookmark-empty.svg?react';
import BookMark from './bookmark.svg?react';
import Cafe from './cafe-dessert.svg?react';
import Findy1 from './findy-1.svg?react';
import Findy2 from './findy-2.svg?react';
import Findy3 from './findy-3.svg?react';
import Findy4 from './findy-4.svg?react';
import Findy5 from './findy-5.svg?react';
import Findy6 from './findy-6.svg?react';
import FindyLogo1 from './findy-logo1.svg?react';
import FindyLogo2 from './findy-logo2.svg?react';
import Gps from './gps.svg?react';
import Hospital from './hospital.svg?react';
import KakaoLogin from './kakao-login.svg?react';
import Link from './link.svg?react';
import Location from './location.svg?react';
import Map from './map.svg?react';
import NaverLogin from './naver-login.svg?react';
import Other from './other.svg?react';
import Public from './public.svg?react';
import Restaurant from './restaurant.svg?react';
import Shopping from './shopping.svg?react';
import Travel from './travel.svg?react';

export const Icons = {
  restaurant: Restaurant,
  cafe: Cafe,
  bar: Bar,
  shopping: Shopping,
  travel: Travel,
  public: Public,
  hospital: Hospital,
  other: Other,
  emptyBookMark: EmptyBookMark,
  bookMark: BookMark,
  gps: Gps,
  link: Link,
  map: Map,
  location: Location,
  kakaoLogin: KakaoLogin,
  naverLogin: NaverLogin,
  findy1: Findy1,
  findy2: Findy2,
  findy3: Findy3,
  findy4: Findy4,
  findy5: Findy5,
  findy6: Findy6,
  findyLogo1: FindyLogo1,
  findyLogo2: FindyLogo2,
};

export type IconName = keyof typeof Icons;
export const iconNames = Object.keys(Icons) as IconName[];
