import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../sheared/Navbar";

const Main = () => {
  const isOwerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwerPath && <Navbar />}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
