import Banner from "../../components/Banner";
import ChooseUs from "../../components/ChooseUs";
import ExclusiveOffer from "../../components/ExclusiveOffer";
import FAQ from "../../components/FAQ";
import FeatureDestination from "../../components/FeatureDestination";
import FeatureSection from "../../components/FeatureSection";
import HotelDemon from "../../components/HotelDemon";
import HotelPreview from "../../components/HotelPreview";
import RoomReservation from "../../components/RoomReservation";
import TemplateGallery from "../../components/TemplateGallery";
import Testimonials from "../../components/Testimonials";
import WebsiteBuilder from "../../components/WebsiteBuilder";
import WebsiteSlider from "../../components/WebsiteSlider";
const Home = () => {
  return (
    <div>
      <Banner />
      {/* <FeatureDestination /> */}
      <FeatureSection />
      <HotelPreview />
      <HotelDemon />
      <WebsiteBuilder />
      <WebsiteSlider />
      <RoomReservation />
      <ChooseUs />
      <TemplateGallery />
      <FAQ />
      {/* <ExclusiveOffer /> */}
      <Testimonials />
    </div>
  );
};

export default Home;
