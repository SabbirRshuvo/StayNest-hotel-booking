import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../assets/Slider/slider1.jpg";
import image2 from "../assets/Slider/slider2.jpg";
import image3 from "../assets/Slider/slider3.jpg";
import image4 from "../assets/Slider/slider4.jpg";
import image5 from "../assets/Slider/slider5.jpg";
import image6 from "../assets/Slider/slider6.jpg";
import image7 from "../assets/Slider/slider7.jpg";
import image8 from "../assets/Slider/slider8.jpg";
import image9 from "../assets/Slider/slider9.jpg";
import image10 from "../assets/Slider/slider10.jpg";
import image11 from "../assets/Slider/slider11.jpg";
import image12 from "../assets/Slider/slider12.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];
const WebsiteSlider = () => {
  return (
    <>
      {/* Slider Section */}
      <div className="w-full bg-[#3f563c] text-gray-900 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-white">
            Inner Pages Showcase
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            className="w-full custom-swiper-pagination"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-auto object-cover rounded-xl shadow-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom pagination styling */}
        <style>{`
        .custom-swiper-pagination .swiper-pagination {
          position: relative;
          bottom: 0;
          margin-top: 20px;
          text-align: center;
        }

        .custom-swiper-pagination .swiper-pagination-bullet {
          background-color: white;
          opacity: 1;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #facc15; /* yellow-400 */
        }
      `}</style>
      </div>
    </>
  );
};

export default WebsiteSlider;
