import React from 'react';

const About = () => {
  return (
    <div className="flex justify-center p-10 min-h-screen">
      <div className="max-w-4xl bg-white p-12 lg:p-16 border-l-4 border-r-4 border-gray-200">
        <h1 className="text-5xl font-bold mb-3 text-gray-800">
          <span className="text-[#1a4d3]">About Us</span>
        </h1>

        <p className="text-base text-gray-600 leading-relaxed max-w-2xl mb-10 pb-8 border-b border-gray-200">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

        <div className="flex space-x-8 mb-8 text-lg">
          <span className="font-semibold text-[#1a4d3e]">Story</span>
          <span className="text-gray-400 hover:text-gray-600 cursor-pointer transition duration-150">Mission</span>
          <span className="text-gray-400 hover:text-gray-600 cursor-pointer transition duration-150">Success</span>
          <span className="text-gray-400 hover:text-gray-600 cursor-pointer transition duration-150">Team & Others</span>
        </div>

        <p className="text-base text-gray-700 leading-loose mb-6">We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
        <p className="text-base text-gray-700 leading-loose mb-6">We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
        <p className="text-base text-gray-700 leading-loose mb-6">We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
      </div>
    </div>
  );
};

export default About;