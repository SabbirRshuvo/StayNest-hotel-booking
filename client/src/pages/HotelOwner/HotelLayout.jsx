import React from "react";
import HotelNav from "../../components/DashboardNav";

import { Outlet } from "react-router";
import HotelSidebar from "../../components/DashboardSidebar";

const HotelLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <HotelNav />
      <div className="flex h-full">
        <HotelSidebar />
        <div className="flex-1 p-4 pt-10 md:px-10 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HotelLayout;
