import React from "react";
import Sidebar from "../../components/HotelSidebar";
import HotelNav from "../../components/HotelNav";

const OwnerLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar role="owner" />
      <div className="flex-1">
        <HotelNav />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default OwnerLayout;
