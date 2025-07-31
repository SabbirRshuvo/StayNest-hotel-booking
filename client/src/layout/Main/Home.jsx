import Banner from "../../components/Banner";
import BookingCapacity from "../../components/BookingCapacity";
import ChooseUs from "../../components/ChooseUs";
import FAQ from "../../components/FAQ";
import FeatureSection from "../../components/FeatureSection";
import HotelDemand from "../../components/HotelDemand";
import HotelPreview from "../../components/HotelPreview";
import RoomReservation from "../../components/RoomReservation";
import Synchronization from "../../components/Synchronization";
import TemplateGallery from "../../components/TemplateGallery";
import Testimonials from "../../components/Testimonials";
import TotalCost from "../../components/TotalCost";
import WebsiteBuilder from "../../components/WebsiteBuilder";
import WebsiteSlider from "../../components/WebsiteSlider";
import FadeInLoad from "../../Hooks/FadeInLoad";
const Home = () => {
  return (
    <div>
      <Banner />
      {/* <FeatureDestination /> */}
      <FadeInLoad delay={0.2}>
        <FeatureSection />
      </FadeInLoad>
      <FadeInLoad delay={0.4}>
        <HotelPreview />
      </FadeInLoad>
      <FadeInLoad delay={0.6}>
        <HotelDemand />
      </FadeInLoad>
      <FadeInLoad delay={0.8}>
        <WebsiteBuilder />
      </FadeInLoad>
      <FadeInLoad delay={1}>
        <WebsiteSlider />
      </FadeInLoad>
      <FadeInLoad delay={1.2}>
        <RoomReservation />
      </FadeInLoad>
      <FadeInLoad delay={1.4}>
        <Synchronization />
      </FadeInLoad>
      <FadeInLoad delay={1.6}>
        <BookingCapacity />
      </FadeInLoad>
      <FadeInLoad delay={1.8}>
        <TotalCost />
      </FadeInLoad>
      <FadeInLoad delay={2}>
        <ChooseUs />
      </FadeInLoad>
      <FadeInLoad delay={2.2}>
        <TemplateGallery />
      </FadeInLoad>
      <FadeInLoad delay={2.4}>
        <FAQ />
      </FadeInLoad>
      <FadeInLoad delay={2.6}>
        <Testimonials />
      </FadeInLoad>
    </div>
  );
};

export default Home;
