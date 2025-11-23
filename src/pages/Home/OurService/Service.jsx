import React from 'react';
import png from '../../../assets/service.png'
const Service = () => {
  return (
    <div className='bg-[#03373d] p-10 mt-10 rounded-md'>

       <h3 className='text-3xl text-center font-bold text-white'>Our Services</h3>
      <p  className='text-center text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-sm:px-4 gap-4 mt-10'>
            <div className='bg-white shadow p-6 hover:bg-[#caeb66] rounded-md '>
            <div className='flex justify-center'>
               <img src={png} alt="" />
            </div>
               <h4 className='text-2xl font-bold text-center py-2'>Express  & Standard Delivery</h4>
               <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
              </div>
            <div className='bg-white shadow p-6 hover:bg-[#caeb66] rounded-md'>
             <div className='flex justify-center'>
               <img src={png} alt="" />
            </div>
               <h4 className='text-2xl font-bold text-center py-2'>Nationwide Delivery</h4>
               <p>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
              </div>
            <div className='bg-white shadow p-6 hover:bg-[#caeb66] rounded-md'>
            <div className='flex justify-center'>
               <img src={png} alt="" />
            </div>
               <h4 className='text-2xl font-bold text-center py-2'>Fulfillment Solution</h4>
               <p>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
              </div>
            <div className='bg-white shadow p-6 hover:bg-[#caeb66] rounded-md'>
              <div className='flex justify-center'>
               <img src={png} alt="" />
            </div>
               <h4 className='text-2xl font-bold text-center py-2'>Cash on Home Delivery</h4>
               <p>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
              </div>
            <div className='bg-white shadow p-6 hover:bg-[#caeb66] rounded-md'>
              <div className='flex justify-center'>
               <img src={png} alt="" />
            </div>
               <h4 className='text-2xl font-bold text-center py-2'>Corporate Service / Contract In Logistics</h4>
               <p>Customized corporate services which includes warehouse and inventory management support.</p>
              </div>
            <div className='bg-white shadow p-6 hover:bg-[#caeb66] rounded-md'>
            <div className='flex justify-center'>
               <img src={png} alt="" />
            </div>
               <h4 className='text-2xl font-bold text-center py-2'>Parcel Return</h4>
               <p>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
              </div>
    </div>
    </div>
  );
};

export default Service;