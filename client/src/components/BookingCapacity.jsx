import React from "react";
import { FaBed, FaWifi, FaSwimmer, FaUtensils } from "react-icons/fa";

import image1 from "../assets/booking-capacity-detection.jpg";

import image2 from "../assets/booking-capacity-visibility.gif";

const BookingCapacity = () => {
  return (
    <div className=" min-h-screen bg-[#000000]">
      <div className="w-full px-6 md:px-16 py-12 space-y-20 max-w-7xl mx-auto text-white ">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h4 className="text-yellow-400 uppercase">Room Booking Features</h4>
            <h2 className="text-4xl font-bold mb-6 text-gray-200">
              Booking Capacity Detection
            </h2>
            <p className="text-lg text-gray-300 mb-6 tracking-wider">
              When guests select the number of people for their booking, the
              form will automatically validate in real time whether the entered
              number is within the allowed capacity range. This ensures that
              guests are always aware of the room’s capacity limits during the
              booking process.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300 text-base ">
              The following checks are performed:
              <li className="mt-4">Total Room Capacity</li>
              <li>Adults & Children Limit</li>
              <li>Remaining available rooms for the selected dates</li>
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

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src={image2}
              alt="Room amenities"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Right Text with Icons */}
          <div className="md:w-1/2">
            <h4 className="text-yellow-400 uppercase">Room Booking Features</h4>
            <h2 className="text-4xl font-bold mb-6 text-gray-200">
              Instant Booking Rule Visibility
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              The room booking rules you set—such as stay lengths, non-check-out
              days of the week, and more—will be displayed in the calendar in
              real time. This ensures that your guests can easily see which
              dates are available or unavailable, along with the reasons for any
              restrictions, making it easier for them to plan their trips.
            </p>
            <ul className="space-y-4 text-base text-gray-300">
              <li className="flex items-center gap-3">
                <FaBed className="text-2xl  text-orange-400" />
                King-size beds with premium linens
              </li>
              <li className="flex items-center gap-3 ">
                <FaWifi className="text-orange-400 text-2xl" />
                High-speed Wi-Fi in all rooms
              </li>
              <li className="flex items-center gap-3">
                <FaSwimmer className="text-orange-400 text-2xl" />
                Access to private pool and beach
              </li>
              <li className="flex items-center gap-3">
                <FaUtensils className="text-orange-400 text-2xl" />
                In-room dining and minibar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCapacity;
