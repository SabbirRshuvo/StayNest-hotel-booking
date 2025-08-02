import React from "react";

import image1 from "../assets/total-cost-breakdown.jpg";

const TotalCost = () => {
  return (
    <div className="bg-[#445541]">
      <div className="w-full  px-6 md:px-16 py-12 space-y-20 max-w-7xl mx-auto min-h-[600px] flex text-center items-center">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h4 className="uppercase text-yellow-500 py-3">
              Room Booking Features
            </h4>
            <h2 className="text-4xl font-semibold mb-6 text-white">
              Luxury Stay for Every Guest
            </h2>
            <p className="text-lg text-gray-200 mb-6 font-light tracking-wide ">
              When your guests book a room, they can click on the “Total Cost”
              section in the booking form to expand the full breakdown of
              charges. This provides them with a clearer understanding of what
              is included in the total payment and any potential discounts they
              may receive.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300 text-base text-left">
              <li>Sunset view Suites with private balconies</li>
              <li>Family Villas with multiple bedrooms</li>
              <li>24/7 concierge and room service</li>
              <li>Complimentary breakfast and spa access</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src={image1}
              alt="Booking overview"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
