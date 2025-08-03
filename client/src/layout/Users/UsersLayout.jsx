import React from "react";
import Sidebar from "../../components/HotelSidebar";
import HotelNav from "../../components/HotelNav";

const UsersLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar role="users" />
      <div className="flex-1">
        <HotelNav />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default UsersLayout;
