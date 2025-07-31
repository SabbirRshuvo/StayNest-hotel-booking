import React from "react";
import image1 from "../assets/heroIcon5.jpg";
import image2 from "../assets/Island/beach.jpg";
import image3 from "../assets/Mountain/img-16.jpg";
import image4 from "../assets/apart.jpg";
import image5 from "../assets/countryside.jpg";
import image6 from "../assets/coming-soon.jpg";

const HotelPreview = () => {
  return (
    <section className="py-20 px-4 md:px-10 w-full bg-black text-white min-h-screen">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
          Import the Demo with One Click
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          You can import the entire demo content with one click and then
          customize it to your heart's content using the simple drag-and-drop
          interface.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
        {/* Demo 1 */}
        <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg">
          <img
            src={image1}
            alt="Hotel Demo 1"
            className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="p-4 bg-gray-900">
            <h3 className="text-lg font-semibold">Luxury Hotel</h3>
          </div>
        </div>

        {/* Demo 2 */}
        <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg">
          <img
            src={image2}
            alt="Hotel Demo 2"
            className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="p-4 bg-gray-900">
            <h3 className="text-lg font-semibold">Beach Resort</h3>
          </div>
        </div>

        {/* Demo 3 */}
        <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg">
          <img
            src={image3}
            alt="Hotel Demo 3"
            className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="p-4 bg-gray-900">
            <h3 className="text-lg font-semibold">Mountain Retreat</h3>
          </div>
        </div>
        {/* Demo 4 */}
        <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg">
          <img
            src={image4}
            alt="Hotel Demo 3"
            className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="p-4 bg-gray-900">
            <h3 className="text-lg font-semibold">City Apart</h3>
          </div>
        </div>
        {/* Demo 5 */}
        <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg">
          <img
            src={image5}
            alt="Hotel Demo 3"
            className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="p-4 bg-gray-900">
            <h3 className="text-lg font-semibold">Countryside Lodge</h3>
          </div>
        </div>
        {/* Demo 6 */}
        <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg">
          <img
            src={image6}
            alt="Hotel Demo 3"
            className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="p-4 bg-gray-900">
            <h3 className="text-lg font-semibold">Coming soon</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelPreview;
