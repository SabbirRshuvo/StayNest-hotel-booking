import { NavLink } from "react-router";

const DashboardSidebar = () => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-blue-100 transition text-gray-700";

  return (
    <div className="w-44 h-full  border-r bg-white  p-4 ">
      <nav className="space-y-2">
        <NavLink to="/users" className={linkClass}>
          📊 Dashboard
        </NavLink>
        <NavLink to="/users/payment" className={linkClass}>
          💳 Payment
        </NavLink>
        <NavLink to="/users/bookings" className={linkClass}>
          📚 Book List
        </NavLink>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
