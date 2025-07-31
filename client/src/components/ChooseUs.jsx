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
      icon: <FaRegClock size={30} />,
      title: "Lifetime Updates",
      desc: "Get free continuous updates for life. We'll continue to update the theme to pursue higher standards.",
    },
    {
      icon: <FaLanguage size={30} />,
      title: "Multilingual Support",
      desc: "Translation & RTL Ready. WPML & Polylang compatible. Helps create multilingual sites.",
    },
    {
      icon: <FaCode size={30} />,
      title: "Performance Optimized",
      desc: "Optimized page speed and performance with good structure and well-written code.",
    },
    {
      icon: <FaCogs size={30} />,
      title: "Drag & Drop Editor",
      desc: "Fast, flexible, easy to use. Build with Elementor, and including 33+ widgets.",
    },
    {
      icon: <FaBook size={30} />,
      title: "Detailed Documentation",
      desc: "Well-written detailed documentation to help create a hotel site using the theme.",
    },
    {
      icon: <FaGlobe size={30} />,
      title: "Responsive Design",
      desc: "Adapts to different screen sizes to maintain usability and appearance on all devices.",
    },
    {
      icon: <FaGem size={30} />,
      title: "Lifetime License",
      desc: "One-time fees. No subscription. No hidden fees or additional purchases.",
    },
    {
      icon: <FaUserShield size={30} />,
      title: "Active Elite Author",
      desc: "More than 70,000 users. High-quality and functional products.",
    },
  ];
  return (
    <section className="py-16 px-4 bg-white text-neutral">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="uppercase text-sm font-semibold text-gray-500 mb-2">
          Why Choose The Theme
        </h4>
        <h2 className="text-4xl font-serif font-bold mb-6">
          Build a Flexible & Robust Hotel
          <br />
          Website with Top-notch Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-neutral-50 p-6 rounded-md shadow-sm text-left"
            >
              <div className="text-yellow-900 mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
