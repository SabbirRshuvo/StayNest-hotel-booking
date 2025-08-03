import { NavLink } from "react-router";

import { FiHome, FiPlusSquare, FiList } from "react-icons/fi";

const HotelSidebar = () => {
  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FiHome className="text-lg" />,
    },
    {
      name: "Add Room",
      path: "/dashboard/add-room",
      icon: <FiPlusSquare className="text-lg" />,
    },
    {
      name: "List Room",
      path: "/dashboard/list-room",
      icon: <FiList className="text-lg" />,
    },
  ];
  return (
    <div className="md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.path}
          key={link.name}
          end="/dashboard"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 md:px-8 gap-3 ${
              isActive
                ? "border-r-2 md:border-r-[6px] bg-blue-600/10 border-orange-400 text-orange-500"
                : "hover:bg-gray-100/90 border-white text-gray-700"
            }`
          }
        >
          {link.icon}
          <p className="md:block hidden text-center">{link.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default HotelSidebar;
