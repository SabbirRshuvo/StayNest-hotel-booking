import HeroImage from "../assets/heroImage.png";
import Navbar from "../sheared/Navbar";

const Banner = () => {
  return (
    <div className="relative">
      <Navbar />
      <img src={HeroImage} alt="" />
    </div>
  );
};

export default Banner;
