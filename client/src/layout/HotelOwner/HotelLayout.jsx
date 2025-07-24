import React from "react";
import HotelNav from "../../components/hotelOwner/HotelNav";
import Sidebar from "../../components/hotelOwner/Sidebar";
import { Outlet } from "react-router";

const HotelLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <HotelNav />
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-4 pt-10 md:px-10 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HotelLayout;
