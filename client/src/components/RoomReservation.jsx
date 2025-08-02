/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaUsers, FaStar, FaHotel, FaCheckCircle } from "react-icons/fa";

import image1 from "../assets/Reservation/reservation1.jpg";
import image2 from "../assets/Reservation/reservation2.jpg";
import image3 from "../assets/Reservation/reservation3.jpg";

import image4 from "../assets/Reservation/reservation4.jpg";
import image5 from "../assets/Reservation/reservation5.jpg";
import image6 from "../assets/Reservation/reservation6.jpg";
import image7 from "../assets/Reservation/reservation7.jpg";
import image8 from "../assets/Reservation/reservation8.jpg";
import image9 from "../assets/Reservation/reservation9.jpg";
import { Fade } from "react-awesome-reveal";

const cards = [
  {
    title: "Room Management",
    img: image1,
    bullets: [
      "   Manage all rooms in dashboard",
      "Clear and well-grouped options",
      "Room Availability Management",
      "Room Details: Images & Galleries, Amenities",
    ],
  },
  {
    title: "Room Reservation",
    img: image2,
    bullets: [
      "Theme Built-in Booking Form",
      "Checkout & manage orders with WooCommerce",
      "Order with room booking details",
      "Set Discount Coupons in WooCommerce",
    ],
  },
  {
    title: "Room Search & Filter",
    img: image3,
    bullets: [
      "  Search with check-in & checkout date, and number of guests",
      "5 Search Form Styles with Design Options",
      "Responsive and Mobile-Friendly Design",
    ],
  },
  {
    title: "Multi-Room Support",
    img: image4,
    bullets: [
      "Book multiple rooms in one go",
      "Flexible occupancy setup",
      "Set minimum and maximum guests per room",
      "Manage inventory per room",
    ],
  },
  {
    title: "Pool of Rooms",
    img: image5,
    bullets: [
      "  Create pools of rooms for special offers",
      "Group rooms by type or features",
      "Easily manage and update pool availability",
    ],
  },
  {
    title: "Double Rooms",
    img: image6,
    bullets: [
      "  Create special double room offers",
      "Set unique pricing and availability",
      "Highlight special amenities for double rooms",
      "Flexible booking options for couples or families",
    ],
  },
  {
    title: "Island Hotel",
    img: image7,
    bullets: [
      "  Create unique island hotel experiences",
      "Customizable island-themed booking options",
      "Special amenities and services for island stays",
      "Flexible pricing for island rooms",
    ],
  },
  {
    title: "Review System",
    img: image8,
    bullets: [
      "Guest reviews and ratings",
      "Admin moderation panel",
      "Auto-publish or manual approve",
    ],
  },
  {
    title: "Awesome Views",
    img: image9,
    bullets: [
      "  Showcase stunning views from rooms",
      "Highlight unique room features",
      "Use high-quality images for better engagement",
      "Attract guests with picturesque room settings",
    ],
  },
];

const RoomReservation = () => {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="text-center mb-12">
        <p className="text-yellow-400 uppercase tracking-wide font-semibold mb-2">
          Room Booking Features
        </p>
        <h2 className="text-4xl font-bold">Room Management & Reservations</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          With our own built-in room booking system, you can easily create a
          hotel website with booking functionality.
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
        {cards.map((card, idx) => (
          <Fade direction="up" triggerOnce>
            <motion.div
              // whileHover={{ scale: 1.03 }}
              key={idx}
              className="bg-[#29412a] rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 text-white">
                  {card.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  {card.bullets.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="text-yellow-400 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default RoomReservation;
