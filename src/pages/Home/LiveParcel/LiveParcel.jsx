import React from 'react';
import img1 from '../../../assets/live-tracking.png'
import img2 from '../../../assets/safe-delivery.png'
import img3 from '../../../assets/tiny-deliveryman.png'

const LiveParcel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 p-4">

      {/* Card 1 */}
      <div className="bg-[#F3F7F7] p-8 rounded-2xl flex items-start gap-6 max-md:flex-col ">
        <img src={img1} alt="" />
        <div>
          <h2 className="text-xl font-semibold text-[#002B2B]">Live Parcel Tracking</h2>
          <p className="text-[#4A6767] mt-2">
            Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, 
            monitor your shipment’s journey and get instant status updates for complete peace of mind.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#F3F7F7] p-8 rounded-2xl flex items-start gap-6 max-md:flex-col">
        <img src={img2} alt="" />
        <div>
          <h2 className="text-xl font-semibold text-[#002B2B]">100% Safe Delivery</h2>
          <p className="text-[#4A6767] mt-2">
            We ensure your parcels are handled with the utmost care and delivered securely to their 
            destination. Our reliable process guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#F3F7F7] p-8 rounded-2xl flex items-start gap-6 max-md:flex-col">
        <img src={img3} alt="" />
        <div>
          <h2 className="text-xl font-semibold text-[#002B2B]">24/7 Call Center Support</h2>
          <p className="text-[#4A6767] mt-2">
            Our dedicated support team is available around the clock to assist you with any questions, 
            updates, or delivery concerns — anytime you need us.
          </p>
        </div>
      </div>

    </div>
  );
};

export default LiveParcel;