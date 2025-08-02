/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaWifi,
  FaSwimmingPool,
  FaConciergeBell,
  FaUtensils,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

import room from "../../src/assets/room.jpg";
import pool from "../../src/assets/pool.jpg";
import dining from "../../src/assets/dining.jpg";
import lobby from "../../src/assets/lobby.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-10 my-24">
      <Fade direction="right" triggerOnce>
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-sky-600">
            About Our Hotel
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Discover comfort, elegance, and unforgettable experiences at our
            beachfront hotel.
          </p>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-base-200 p-6 rounded-lg shadow-md mb-10"
          >
            <h3 className="text-xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Nestled along the serene shores of Cox’s Bazar, our hotel offers a
              perfect blend of luxury and tranquility. Since opening our doors
              in 2015, we've welcomed thousands of guests with warm hospitality
              and world-class service. Whether you're here for a romantic
              getaway, a family vacation, or a business retreat, we ensure your
              stay is memorable.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-10"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-base-200 p-4 rounded-lg shadow hover:shadow-lg transition">
                <FaWifi className="text-3xl text-sky-600 mb-2 mx-auto" />
                <h4 className="font-semibold">Free High-Speed Wi-Fi</h4>
              </div>
              <div className="bg-base-200 p-4 rounded-lg shadow hover:shadow-lg transition">
                <FaSwimmingPool className="text-3xl text-sky-600 mb-2 mx-auto" />
                <h4 className="font-semibold">Infinity Pool</h4>
              </div>
              <div className="bg-base-200 p-4 rounded-lg shadow hover:shadow-lg transition">
                <FaConciergeBell className="text-3xl text-sky-600 mb-2 mx-auto" />
                <h4 className="font-semibold">24/7 Concierge</h4>
              </div>
              <div className="bg-base-200 p-4 rounded-lg shadow hover:shadow-lg transition">
                <FaUtensils className="text-3xl text-sky-600 mb-2 mx-auto" />
                <h4 className="font-semibold">Gourmet Dining</h4>
              </div>
            </div>
          </motion.div>

          {/* Optional Gallery Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-10"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              A Glimpse of Paradise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={room}
                  alt="Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={pool}
                  alt="Pool"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={dining}
                  alt="Dining"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={lobby}
                  alt="Lobby"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Where to Find Us</h3>
            <p className="text-gray-600 mb-2">
              123 Beach Road, Cox’s Bazar, Bangladesh
            </p>
            <p className="text-gray-600">
              Serving guests from around the world with pride and passion.
            </p>
          </motion.div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
