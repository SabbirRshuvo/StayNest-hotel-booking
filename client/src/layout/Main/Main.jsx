import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../sheared/Navbar";
import Footer from "../../sheared/Footer";

const Main = () => {
  const isOwerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwerPath && <Navbar />}
      {isOwerPath && <HotelReg />}
      <div>
        <Outlet />
      </div>
      {!isOwerPath && <Footer />}
    </div>
  );
};

export default Main;
