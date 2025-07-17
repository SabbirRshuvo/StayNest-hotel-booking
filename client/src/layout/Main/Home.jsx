import Banner from "../../components/Banner";
import ExclusiveOffer from "../../components/ExclusiveOffer";
import FeatureDestination from "../../components/FeatureDestination";
import Newsletter from "../../components/Newsletter";
import Testimonials from "../../components/Testimonials";
const Home = () => {
  return (
    <div>
      <Banner />
      <FeatureDestination />
      <ExclusiveOffer />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
