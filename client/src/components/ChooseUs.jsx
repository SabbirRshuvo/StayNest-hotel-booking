import React from "react";
import { FaConciergeBell, FaHotel, FaShieldAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const ChooseUs = () => {
  const features = [
    {
      icon: <FaHotel size={40} className="text-primary" />,
      title: "Luxury Accommodations",
      desc: "Our hotels offer premium rooms with top-class facilities and comfort.",
    },
    {
      icon: <FaConciergeBell size={40} className="text-primary" />,
      title: "24/7 Customer Service",
      desc: "Round-the-clock service to ensure a smooth and memorable stay.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-primary" />,
      title: "Secure Booking",
      desc: "Your payments and personal data are protected with top-level security.",
    },
    {
      icon: <MdLocationOn size={40} className="text-primary" />,
      title: "Top Destinations",
      desc: "We offer stays in the world’s most popular and scenic destinations.",
    },
  ];
  return (
    <div className="bg-base-100 py-16 px-4 md:px-10 lg:px-24">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <Fade direction="up" triggerOnce>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-content mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Discover what makes our hotel booking platform different from the
            rest.
          </p>
        </Fade>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Fade direction="up" triggerOnce delay={index * 100} key={index}>
            <div className="card bg-white text-neutral shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="card-title text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
