/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import image1 from "../assets/Gallery/gallery1.jpg";
import image2 from "../assets/Gallery/gallery2.jpg";
import image3 from "../assets/Gallery/gallery3.jpg";
import image4 from "../assets/Gallery/gallery4.jpg";
import image5 from "../assets/Gallery/gallery5.jpg";
import image6 from "../assets/Gallery/gallery6.jpg";
import image7 from "../assets/Gallery/gallery7.jpg";
import image8 from "../assets/Gallery/gallery8.jpg";
import image9 from "../assets/Gallery/gallery9.jpg";
import image10 from "../assets/Gallery/gallery10.jpg";

const TemplateGallery = () => {
  const images = [
    { id: 1, src: image1, alt: "StayNest Impact 1" },
    { id: 2, src: image2, alt: "StayNest Impact 2" },
    { id: 3, src: image3, alt: "StayNest Impact 3" },
    { id: 4, src: image4, alt: "StayNest Impact 4" },
  ];
  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            className="w-full h-64 overflow-hidden rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TemplateGallery;
