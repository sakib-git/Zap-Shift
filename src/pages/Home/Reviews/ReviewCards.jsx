import React from 'react';

const ReviewCards = ({review}) => {
    const {userName, review : testimonial, user_photoURL } = review
  return (
    <div className="max-w-sm p-6 bg-white rounded-2xl shadow border border-gray-200 mb-20">
  
  {/* <!-- Quote Icon --> */}
  <div className="text-teal-300 text-4xl mb-3">❝</div>

  {/* <!-- Review Text --> */}
  <p className=" mb-6">
  {testimonial}
  </p>

  <div className="border-t border-gray-200 my-4"></div>

  {/* <!-- Profile --> */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12  rounded-full">
      <img src={user_photoURL} alt="" className='rounded-full' />
    </div>


    <div>
      <h3 className="font-semibold text-gray-800">{userName}</h3>
      <p className="text-gray-500 text-sm">Senior Product Designer</p>
      
    </div>
  </div>

</div>
  );
};

export default ReviewCards;