import {
  FaGlobe,
  FaBook,
  FaGem,
  FaUserShield,
  FaLanguage,
  FaCode,
  FaCogs,
  FaRegClock,
} from "react-icons/fa";

const ChooseUs = () => {
  const features = [
    {
      icon: <FaRegClock size={40} />,
      title: "Lifetime Updates",
      desc: "Get free continuous updates for life. We will continue to update the theme to pursue higher standards.",
    },
    {
      icon: <FaLanguage size={40} />,
      title: "Multilingual Support",
      desc: "Translation & RTL Ready. WPML & Polylang compatible. To help you create a multilingual website.",
    },
    {
      icon: <FaCode size={40} />,
      title: "Performance Optimized",
      desc: "Optimized page speed and performance with good structure and well-written code.",
    },
    {
      icon: <FaCogs size={40} />,
      title: "Drag & Drop Editor",
      desc: "Fast, flexible, easy to use. Build with Elementor, and including 33+ widgets and 10+ templates. including 10+ templates.",
    },
    {
      icon: <FaBook size={40} />,
      title: "Detailed Documentation",
      desc: "Well-written detailed documentation to help create a hotel site using the theme. Includes video tutorials. ",
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Responsive Design",
      desc: "Adapts to different screen sizes to maintain usability and appearance on all devices. Tested on all major browsers.",
    },
    {
      icon: <FaGem size={40} />,
      title: "Lifetime License",
      desc: "One-time fees. No subscription. No hidden fees or additional purchases. buy once, use forever.",
    },
    {
      icon: <FaUserShield size={40} />,
      title: "Active Elite Author",
      desc: "Choice of more than 70,000 users. We make beautiful and functional products with high standards of quality.",
    },
  ];
  return (
    <section className="py-16 px-6 bg-white text-neutral ">
      <div className="max-w-7xl mx-auto text-center  ">
        <h4 className="uppercase text-sm font-semibold text-gray-500 mb-2">
          Why Choose The Theme
        </h4>
        <h2 className="text-4xl font-serif font-bold mb-6">
          Build a Flexible & Robust Hotel
          <br />
          Website with Top-notch Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 ">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-neutral-50 p-6 rounded-md shadow-sm text-left transition-transform duration-300 hover:scale-105"
            >
              <div className="text-yellow-900 mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-md text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
