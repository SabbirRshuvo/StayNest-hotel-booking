/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

import logo from "../assets/heroIcon3.jpg"; // Adjust the path as necessary

const Contact = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <div className=" w-full h-[300px] md:h-[400px] overflow-hidden">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-5xl font-bold z-10"
        >
          <img src={logo} alt="" />
        </motion.h1>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 px-4 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Fade cascade>
          <div className="bg-base-100 shadow-md rounded-lg p-6 text-center">
            <FaPhoneAlt className="text-3xl mx-auto text-lime-600 mb-3" />
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p>+880 1734 0668 70</p>
          </div>
          <div className="bg-base-100 shadow-md rounded-lg p-6 text-center ">
            <FaEnvelope className="text-3xl mx-auto text-sky-600 mb-3" />
            <h2 className="text-xl font-semibold mb-2 ">Email</h2>
            <p>sabbirhshuvo11 @gmail.com</p>
          </div>
          <div className="bg-base-100 shadow-md rounded-lg p-6 text-center">
            <FaMapMarkerAlt className="text-3xl mx-auto text-sky-800 mb-3" />
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p>Dhaka, Bangladesh</p>
          </div>
        </Fade>
      </div>

      {/* Contact Form */}
      <div className="px-4 md:px-24 pb-16">
        <Slide direction="down">
          <div className="bg-base-200 rounded-xl p-6 md:p-12 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-40"
              ></textarea>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary px-8"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </Slide>
      </div>

      {/* Google Map */}
      <div className="h-[300px] w-full">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902486009531!2d90.39144851445644!3d23.75087679456496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89f05aee5db%3A0x2ffbe9f9c896313c!2sDhaka!5e0!3m2!1sen!2sbd!4v1615568379046!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
