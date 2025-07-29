/* eslint-disable no-unused-vars */
import { Fade, Slide } from "react-awesome-reveal";
import { FaHotel, FaBullseye, FaRoute, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const About = () => {
  return (
    <div className="px-4 md:px-20 py-10 space-y-16 text-gray-800 my-20 ">
      {/* About Us Section */}
      <section className="text-center">
        <Fade cascade>
          <h2 className="text-3xl md:text-4xl font-bold  mb-4 text-sky-600">
            About Us
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            Welcome to StayNest – your gateway to premium hotel experiences. We
            offer seamless hotel booking with exclusive deals and top-rated
            destinations.
          </p>
        </Fade>
      </section>

      {/* Mission & Vision Section with Cards */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 ">
          Our Mission & Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Slide direction="left">
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
              <FaBullseye className="text-5xl text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p>
                Making hotel booking effortless, affordable, and accessible to
                all with innovative technology and customer satisfaction at the
                heart.
              </p>
            </div>
          </Slide>
          <Slide direction="right">
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
              <FaGlobe className="text-5xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p>
                To become the world’s most trusted hotel booking platform by
                offering personalized experiences and building a global travel
                community.
              </p>
            </div>
          </Slide>
        </div>
      </section>

      {/* Our Journey - Timeline or Swiper */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 ">
          Our Journey
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
        >
          {["2018", "2019", "2021", "2024"].map((year, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md p-6 rounded-lg border-t-4 border-green-500"
              >
                <h3 className="text-xl font-bold mb-2 text-sky-600">
                  Milestone - {year}
                </h3>
                <p>
                  In {year}, we achieved a key milestone in our journey.
                  Expanding globally, upgrading our system, and earning our
                  clients’ trust.
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Impact Section with Icon Cards */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-4 ">Our Impact</h2>
        <hr className="mb-12 text-gray-400" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Fade cascade>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
              <FaHotel className="text-5xl text-sky-600 mx-auto mb-4" />
              <h4 className="font-bold text-lg">200+ Hotels</h4>
              <p>Connected with hotels across 50+ countries.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
              <FaRoute className="text-5xl text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-lg">10k+ Bookings</h4>
              <p>Millions of trips simplified and made comfortable.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
              <FaGlobe className="text-5xl text-orange-600 mx-auto mb-4" />
              <h4 className="font-bold text-lg">Global Presence</h4>
              <p>Serving travelers in every corner of the world.</p>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default About;
