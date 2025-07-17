import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../sheared/Navbar";
import Footer from "../../sheared/Footer";

const Main = () => {
  const isOwerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwerPath && <Navbar />}
      <div>
        <Outlet />
      </div>
      {!isOwerPath && <Footer />}
    </div>
  );
};

export default Main;
