import React from 'react';

import amazon from '../../../assets/brands/amazon.png'
import amazonVector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import monnstar from '../../../assets/brands/moonstar.png'
import ranstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import starPeople from '../../../assets/brands/start_people.png'
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const brandLogos = [amazon, amazonVector, casio, monnstar, ranstad, star, starPeople]
const Brand = () => {
  return (
   <>
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
           modules={[Autoplay]}
           autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {
          brandLogos.map(logo => 
             <SwiperSlide>
          <img src={logo} alt="" />
        </SwiperSlide>
           )
        }
       
      
    
      </Swiper>
    </>
  );
};

export default Brand;