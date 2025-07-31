import React from "react";
import { FaMagic, FaTools, FaRocket } from "react-icons/fa";
import image1 from "../assets/regImage.png";
import image2 from "../assets/exclusiveOfferCardImg1.png";
const HotelDemand = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image1}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="z-10 px-4 w-full max-w-6xl flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-2">
          Install Any Demo In Minutes
        </h1>
        <p className="text-sm md:text-lg text-gray-300 mb-10">
          Get started quickly by importing the hand-crafted demo just with
          clicks.
        </p>

        {/* Center Image */}
        <div className="w-full max-w-3xl relative shadow-xl rounded-lg overflow-hidden border border-gray-700">
          <img
            src={image2}
            alt="middle"
            className="w-full h-auto object-cover"
          />

          {/* Floating Button */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg">
            <FaMagic size={18} />
          </div>
        </div>

        {/* Three Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <FaTools size={32} className="text-white mb-2" />
            <p className="text-lg font-medium">Install & Import</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMagic size={32} className="text-white mb-2" />
            <p className="text-lg font-medium">Customize Site</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRocket size={32} className="text-white mb-2" />
            <p className="text-lg font-medium">Ready & Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDemand;
