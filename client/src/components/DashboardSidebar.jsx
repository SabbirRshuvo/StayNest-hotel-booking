import { NavLink } from "react-router-dom";
import { FaHome, FaMoneyBill, FaBook } from "react-icons/fa";

const DashboardSidebar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-sky-600 px-4 py-2 rounded-md font-semibold flex items-center gap-2"
      : "text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2";

  return (
    <div className="w-64 h-full bg-white shadow-md p-4 space-y-2">
      <NavLink to="/users/dashboard" end className={linkClass}>
        <FaHome /> Dashboard
      </NavLink>
      <NavLink to="/users/dashboard/payment" className={linkClass}>
        <FaMoneyBill /> Payment
      </NavLink>
      <NavLink to="/users/dashboard/bookings" className={linkClass}>
        <FaBook /> Bookings
      </NavLink>
    </div>
  );
};

export default DashboardSidebar;
