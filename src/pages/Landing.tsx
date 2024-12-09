import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { Body1 } from '@/components/common/Typography';
import { swiperOptions } from '@/constants/swiperOptions';

const LANDING_IMAGES = ['current', 'extract', 'maker', 'makers', 'youtube'];

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-5 mt-20 xs:mt-28">
          <Icon name="findyLogo1" className="w-2/3 h-20" />
          <Body1>핀디와 함께, 특별한 순간을 찾아보세요</Body1>
        </div>
        <Swiper
          {...swiperOptions}
          className="w-full h-80 xs:h-96 max-w-md px-4 my-10 rounded-lg shadow-lg"
        >
          {LANDING_IMAGES.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center ">
              <img
                src={`/landing/${item}.png`}
                alt={`${item} 이미지`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-3 w-full max-w-[30rem] px-4 mb-5">
          <Button variant="primary" size="large" onClick={() => navigate('/map')}>
            시작하기
          </Button>
        </div>
      </div>
    </>
  );
};
