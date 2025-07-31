/* eslint-disable no-unused-vars */
import {
  FaBed,
  FaBath,
  FaUsers,
  FaSearch,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

import image1 from "../assets/Reservation/reservation1.jpg";
import image2 from "../assets/Reservation/reservation2.jpg";
import image3 from "../assets/Reservation/reservation3.jpg";
import image4 from "../assets/Reservation/reservation4.jpg";
import image5 from "../assets/Reservation/reservation5.jpg";
import image6 from "../assets/Reservation/reservation6.jpg";
import image7 from "../assets/Reservation/reservation7.jpg";
import image8 from "../assets/Reservation/reservation8.jpg";
import image9 from "../assets/Reservation/reservation9.jpg";

const cards = [
  {
    title: "Room Management",
    img: image1,
    bullets: [
      "Manage all rooms in dashboard",
      "Clear and well-grouped options",
      "Room Availability Management",
      "Room Details: Images, Prices, Amenities",
    ],
  },
  {
    title: "Room Reservation",
    img: image2,
    bullets: [
      "Theme Built-in Booking Form",
      "Checkout & manage orders",
      "Room Booking details overview",
      "Discount Coupons in WooCommerce",
    ],
  },
  {
    title: "Room Search & Filter",
    img: image3,
    bullets: [
      "Check-in & checkout date filter",
      "5 Search Form Style options",
      "Responsive and Mobile-Friendly",
    ],
  },
  {
    title: "Multi-Room Support",
    img: image4,
    bullets: [
      "Book multiple rooms in one go",
      "Flexible occupancy setup",
      "Manage inventory per room",
    ],
  },
  {
    title: "Integrated Payments",
    img: image5,
    bullets: [
      "Stripe, PayPal, Card Supported",
      "Secure payment flow",
      "Auto-payment confirmations",
    ],
  },
  {
    title: "Live Availability",
    img: image6,
    bullets: [
      "Sync availability in real-time",
      "Prevent overbooking",
      "Custom calendar view",
    ],
  },
  {
    title: "Custom Pricing",
    img: image7,
    bullets: [
      "Seasonal rates and weekend pricing",
      "Coupon support",
      "Pricing by guests or duration",
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
    title: "Analytics Dashboard",
    img: image9,
    bullets: [
      "Track bookings & revenue",
      "Most viewed rooms",
      "Conversion reports",
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
          <motion.div
            whileHover={{ scale: 1.03 }}
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
        ))}
      </div>
    </section>
  );
};

export default RoomReservation;
