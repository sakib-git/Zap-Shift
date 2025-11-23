import React from 'react';
import car from '../../../assets/bookingIcon.png'

const Work = () => {
  return (
    <div className='mt-15'>
      <h3 className='text-3xl font-medium py-3'>How it Works</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 max-md:px-4'>
        <div className='bg-white shadow p-4 rounded-md'>
         <img src={car}  alt="" />
         <h4 className='text-2xl font-bold'>Booking Pick & Drop</h4>
         <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div className='bg-white shadow p-4 rounded-md'>
         <img src={car}  alt="" />
         <h4 className='text-2xl font-bold'>Cash On Delivery</h4>
         <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div className='bg-white shadow p-4 rounded-md'>
         <img src={car}  alt="" />
         <h4 className='text-2xl font-bold'>Delivery Hub</h4>
         <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div className='bg-white shadow p-4 rounded-md'>
         <img src={car}  alt="" />
         <h4 className=' font-bold'>Booking SME & Corporate</h4>
         <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
      </div>
    </div>
  );
};

export default Work;