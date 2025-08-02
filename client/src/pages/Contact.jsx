/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-10 my-24">
      <Fade direction="up" triggerOnce>
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-sky-600">
            Contact Us
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Have questions or need help with your booking? Reach out to us
            anytime.
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-base-200 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form className="grid grid-cols-1 gap-4">
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
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                />
                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full h-32"
                />
                <button type="submit" className="btn btn-sky-600 w-full">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-base-200 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Our Contact Info</h3>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-sky-600" /> +880 1234 567890
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-sky-600" />{" "}
                  support@hotelbooking.com
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-sky-600" /> 123 Beach Road,
                  Cox's Bazar, Bangladesh
                </p>
                <p>Support Hours: 9:00 AM – 10:00 PM (Everyday)</p>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                <div className="flex gap-4 text-2xl text-sky-600">
                  <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                  <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Optional Map Section */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Our Location
            </h3>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Hotel Location"
                src="https://maps.google.com/maps?q=Cox's%20Bazar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-none"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
