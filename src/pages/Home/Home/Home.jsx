import React from 'react';
import Banner from '../Banner/Banner';
import Work from '../Work/Work';
import Service from '../OurService/Service';
import Brand from '../Brands/Brand';
import LiveParcel from '../LiveParcel/LiveParcel';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
    <div className='mt-10'>
       <Banner></Banner>
    </div>
    <div className='mt-10'>
       <Work></Work>
    </div>
    <div className='mt-10'>
      <Service></Service>
    </div>
    <div className='mt-10'>
      <Brand></Brand>
    </div>
    <div className='mt-10'>
      <LiveParcel></LiveParcel>
    </div>
    <div className='mt-10'>
     <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
    </div>
  );
};

export default Home;