import { FaCheckCircle } from "react-icons/fa";
import image1 from "../assets/elementor.jpg";

const WebsiteBuilder = () => {
  return (
    <div className="w-full bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-sm text-yellow-800 font-semibold tracking-wider mb-2">
            BUILD CONTENT VISUALLY
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Elementor Website Builder
          </h2>
          <p className="text-gray-700 mb-8 text-base md:text-lg max-w-xl">
            Use one of the most popular WordPress page builders. With an
            intuitive drag-and-drop design interface. Enjoy the high flexibility
            and ease of use of editing websites.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
            {[
              "Drag and Drop Editor",
              "Intuitive and Visual",
              "No Coding Required",
              "Header and Footer Builder",
              "Mobile & Mega Menu Builder",
              "33+ Custom Elements",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-800">
                <FaCheckCircle className="text-yellow-600" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative w-full max-w-xl">
          <img
            src={image1}
            alt="Website Builder Preview"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Bottom Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 text-center text-gray-700">
        <div>
          <p className="font-semibold text-md mb-2">Free Lifetime Updates</p>
          <p className="text-sm">
            Our products are constantly updated to adapt to higher standards and
            industry trends.
          </p>
        </div>
        <div>
          <p className="font-semibold text-md mb-2">
            Flexibility & Customizability
          </p>
          <p className="text-sm">
            Colors, fonts and more website appearance options can be customized
            with instant preview.
          </p>
        </div>
        <div>
          <p className="font-semibold text-md mb-2">
            Professional Customer Support
          </p>
          <p className="text-sm">
            Receive one-on-one technique support services from our 5-star rating
            support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilder;
