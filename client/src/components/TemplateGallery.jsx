import { Fade } from "react-awesome-reveal";
import image1 from "../assets/Gallery/gallery21.jpg";
import image2 from "../assets/Gallery/gallery22.jpg";
import image3 from "../assets/Gallery/gallery23.jpg";
import image4 from "../assets/Gallery/gallery24.jpg";
import image5 from "../assets/Gallery/gallery25.jpg";
import image6 from "../assets/Gallery/gallery26.png";
import image7 from "../assets/Gallery/gallery27.png";
import image8 from "../assets/Gallery/gallery28.png";
import image9 from "../assets/Gallery/gallery31.jpg";
import image10 from "../assets/Gallery/gallery32.jpg";
import image11 from "../assets/Gallery/gallery33.jpg";
import image12 from "../assets/Gallery/gallery34.jpg";
import image13 from "../assets/Gallery/gallery35.jpg";
import image14 from "../assets/Gallery/gallery36.jpg";

const TemplateGallery = () => {
  const images = [
    { src: image1, colSpan: "col-span-3", rowSpan: "row-span-2 " },
    { src: image2, colSpan: "col-span-1", rowSpan: "row-span-2" },
    { src: image3, colSpan: "col-span-2", rowSpan: "row-span-2" },
    { src: image4, colSpan: "col-span-2", rowSpan: "row-span-1" },
    { src: image5, colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: image6, colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: image7, colSpan: "col-span-3", rowSpan: "row-span-1" },
    { src: image8, colSpan: "col-span-1", rowSpan: "row-span-2" },
    { src: image9, colSpan: "col-span-1", rowSpan: "row-span-2" },
    { src: image10, colSpan: "col-span-2", rowSpan: "row-span-2" },
    { src: image11, colSpan: "col-span-2", rowSpan: "row-span-3" },
    { src: image12, colSpan: "col-span-2", rowSpan: "row-span-2" },
    { src: image13, colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: image14, colSpan: "col-span-1", rowSpan: "row-span-1" },
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 mx-auto border-b border-gray-400 pb-2 max-w-sm md:max-w-md lg:max-w-xl my-10">
        Hotel Gallery
      </h2>
      <Fade direction="left" triggerOnce>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] max-w-screen-xl mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${img.colSpan} ${img.rowSpan}`}
            >
              <img
                src={img.src}
                alt={`Hotel image ${index + 1}`}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default TemplateGallery;
