import image1 from "../assets/intro-img-1-2.jpg";
import image2 from "../assets/intro-img-2-2.jpg";
import image3 from "../assets/intro-img-3.jpg";

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 md:px-10 w-full bg-white min-h-[880px]">
      <div className="text-center mb-14 max-w-5xl mx-auto space-y-8">
        <h4 className="text-sm font-semibold text-yellow-600 tracking-wide uppercase">
          CozyStay General Key Features
        </h4>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
          Get a Proper Head Start on Your Website
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          CozyStay provides you with WYSIWYG interactive design tools and
          numerous customization options to help you easily build the website of
          your dreams.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto px-4">
        {/* Card 1 */}
        <div className="group text-center lg:space-y-8">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={image1}
              alt="Elementor"
              className="transition-transform duration-500 transform group-hover:scale-105 w-full h-60 object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-4 ">
            Elementor Website Builder
          </h3>
          <p className="text-gray-600 px-6">
            Enjoy the intuitive and flexible drag-and-drop page builder, one of
            the most user-friendly WordPress editor plugins.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group text-center">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={image2}
              alt="Pre-designed Templates"
              className="transition-transform duration-500 transform group-hover:scale-105 w-full h-60 object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            Pre-designed Templates
          </h3>
          <p className="text-gray-600 px-3">
            5 demos & 120+ templates and design elements included in the theme
            package to get you quick and easy started.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group text-center">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={image3}
              alt="Professional Customer Support"
              className="transition-transform duration-500 transform group-hover:scale-105 w-full h-60 object-contain bg-white"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            Professional Customer Support
          </h3>
          <p className="text-gray-600 px-3">
            Receive one-on-one technical support services from our 5-star rating
            support team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
