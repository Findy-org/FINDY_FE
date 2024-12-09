import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export const swiperOptions = {
  modules: [Pagination, Navigation, Autoplay],
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    clickable: true,
    type: 'bullets' as const,
  },
  autoplay: {
    delay: 3000,
  },
  style: {
    '--swiper-pagination-color': '#FF6265',
  } as React.CSSProperties,
  loop: true,
};
