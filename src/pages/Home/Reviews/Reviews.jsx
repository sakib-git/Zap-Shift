import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCards from './ReviewCards';

const Reviews = ({reviewsPromise}) => {
  const reviews = use(reviewsPromise)
  // console.log(reviews)
  return (
    <div>
     <div className='text-center mb-20'>
       <h3 className='text-3xl text-center'>What our customers are sayings</h3>
       <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
     </div>
      
      <Swiper
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          scale : 0.75,
          modifier: 1,
          slideShadows: true,
        }}
          autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }} 
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide> */}
         {
      reviews.map(review =>  <SwiperSlide key={review.id}>
         <ReviewCards review={review}></ReviewCards>
        </SwiperSlide> )
    }
      </Swiper>
 
    </div>
  );
};

export default Reviews;