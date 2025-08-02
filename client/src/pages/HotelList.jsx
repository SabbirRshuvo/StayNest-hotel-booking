/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool,
  FaConciergeBell,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router";

const hotelsData = [
  {
    id: 1,
    name: "Ocean Breeze Resort",
    location: "Cox's Bazar",
    rating: 4.7,
    price: 130,
    type: "Beach",
    facilities: ["Free Wi-Fi", "Swimming Pool", "Concierge"],
    image: "https://i.ibb.co/Wv3ZShsw/nathan-cima-4aq-H2ut-APAs-unsplash.jpg",
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    location: "Bandarban",
    rating: 4.8,
    price: 110,
    type: "Mountain",
    facilities: ["Free Wi-Fi", "Concierge"],
    image: "https://i.ibb.co/BHwWV643/new-1.jpg",
  },
  {
    id: 3,
    name: "Cityscape Apartments",
    location: "Dhaka",
    rating: 4.5,
    price: 90,
    type: "CityApart",
    facilities: ["Free Wi-Fi"],
    image: "https://i.ibb.co/bMzm30tj/edwin-petrus-CP4ms-RXKWOM-unsplash.jpg",
  },
  {
    id: 4,
    name: "Luxury Palace Hotel",
    location: "Dhaka",
    rating: 4.9,
    price: 180,
    type: "Luxury",
    facilities: ["Free Wi-Fi", "Swimming Pool", "Concierge"],
    image:
      "https://i.ibb.co/9ktLMTJB/peter-herrmann-q-Zbeb-Mw-G5-VU-unsplash.jpg",
  },
  {
    id: 5,
    name: "Countryside Inn",
    location: "Sylhet",
    rating: 4.6,
    price: 85,
    type: "Countryside",
    facilities: ["Free Wi-Fi"],
    image:
      "https://i.ibb.co/TxyvfPm4/sourabh-adhya-t3-Cm-Gk-WZw-JY-unsplash.jpg",
  },
  {
    id: 6,
    name: "Seaside Escape",
    location: "Kuakata",
    rating: 4.7,
    price: 125,
    type: "Beach",
    facilities: ["Free Wi-Fi", "Swimming Pool"],
    image: "https://i.ibb.co/hxTKDQS7/new-6.jpg",
  },
  {
    id: 7,
    name: "Hilltop Haven",
    location: "Rangamati",
    rating: 4.8,
    price: 140,
    type: "Mountain",
    facilities: ["Free Wi-Fi", "Concierge"],
    image: "https://i.ibb.co/zVfkFbfX/ben-grayland-z-Wn-Po-FMTXCs-unsplash.jpg",
  },
  {
    id: 8,
    name: "Urban Comfort Suites",
    location: "Chattogram",
    rating: 4.4,
    price: 95,
    type: "CityApart",
    facilities: ["Free Wi-Fi"],
    image: "https://i.ibb.co/k6PpvBmm/new-4.jpg",
  },
  {
    id: 9,
    name: "Royal Grand Hotel",
    location: "Dhaka",
    rating: 4.9,
    price: 200,
    type: "Luxury",
    facilities: ["Free Wi-Fi", "Swimming Pool", "Concierge"],
    image:
      "https://i.ibb.co/6cBCtZhC/dominic-kurniawan-suryaputra-6qfez-K5-Vkz-Y-unsplash.jpg",
  },
  {
    id: 10,
    name: "Green Valley Retreat",
    location: "Mymensingh",
    rating: 4.6,
    price: 100,
    type: "Countryside",
    facilities: ["Free Wi-Fi"],
    image: "https://i.ibb.co/WWYtk710/new-3.jpg",
  },
  {
    id: 11,
    name: "Sunset Bay Resort",
    location: "Saint Martin",
    rating: 4.7,
    price: 150,
    type: "Beach",
    facilities: ["Free Wi-Fi", "Swimming Pool"],
    image:
      "https://i.ibb.co/nhnBX7w/antonio-araujo-7-YBhsz-MWnk-A-unsplash.jpg",
  },
  {
    id: 12,
    name: "Skyline Tower Hotel",
    location: "Dhaka",
    rating: 4.5,
    price: 120,
    type: "CityApart",
    facilities: ["Free Wi-Fi", "Concierge"],
    image: "https://i.ibb.co/yFDyP17D/a-p-2-V-gta-BMM28-unsplash.jpg",
  },
];

const HotelList = () => {
  const navigate = useNavigate();
  const handleBook = (hotel) => {
    navigate(`/rooms/${hotel.id}`, { state: { hotel } });
  };
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto bg-base-100 px-4 py-10 my-20">
      <Fade direction="up" triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-secondary">
          Discover Your Perfect Stay
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Browse our curated selection of hotels across Bangladesh. Whether
          you're looking for luxury, nature, or city vibes — we've got you
          covered.
        </p>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotelsData.map((hotel) => (
          <motion.div
            onClick={() => handleBook(hotel)}
            key={hotel.id}
            whileHover={{ scale: 1.05 }} // scale up by 5%
            transition={{ duration: 0.8, type: "keyframes", stiffness: 100 }}
            className="card bg-base-200 shadow-xl cursor-pointer"
          >
            <figure>
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-60 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">{hotel.name}</h2>
              <p className="flex items-center gap-2 text-sm text-gray-600">
                <FaMapMarkerAlt className="text-sky-600" /> {hotel.location}
              </p>
              <p className="text-sm text-gray-500">
                Type: <span className="font-medium">{hotel.type}</span>
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="flex items-center gap-1 text-yellow-500">
                  <FaStar /> {hotel.rating}
                </span>
                <span className="text-sm font-bold text-sky-600">
                  ${hotel.price}/night
                </span>
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold mb-1">Facilities:</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  {hotel.facilities.includes("Free Wi-Fi") && (
                    <span className="flex items-center gap-1">
                      <FaWifi /> Wi-Fi
                    </span>
                  )}
                  {hotel.facilities.includes("Swimming Pool") && (
                    <span className="flex items-center gap-1">
                      <FaSwimmingPool /> Pool
                    </span>
                  )}
                  {hotel.facilities.includes("Concierge") && (
                    <span className="flex items-center gap-1">
                      <FaConciergeBell /> Concierge
                    </span>
                  )}
                </div>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-block btn-sm">Book Now</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
