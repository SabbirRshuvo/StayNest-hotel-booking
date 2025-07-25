import { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../../provider/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";
import { MdManageAccounts, MdOutlineCalendarMonth } from "react-icons/md";

const HotelNav = () => {
  const { user, logout } = useContext(AuthContext);
  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("logout error", error);
    }
  };
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
      <Link to="/">
        <h1 className="text-2xl">StayNest</h1>
      </Link>
      {/* user authentication part */}
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="User-image" src={user.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-64 p-4 shadow-md text-sm space-y-2"
          >
            {/* User Info */}

            {/* Divider */}
            <hr className="border-t border-gray-300 my-2" />

            {/* Settings Link */}
            <li>
              <Link
                to="/manage-account"
                className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1"
              >
                <MdManageAccounts />
                Manage Account
              </Link>
            </li>

            {/* My Bookings Link */}
            <li>
              <Link
                to="/my-bookings"
                className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1"
              >
                <MdOutlineCalendarMonth />
                My Bookings
              </Link>
            </li>

            {/* Sign Out Button */}
            <li>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 w-full text-left"
              >
                <FaSignOutAlt />
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link
          to="/sign-in"
          className="px-8 py-2.5 rounded-full border border-gray-400 text-gray-600 font-medium ml-4 cursor-pointer hover:bg-gray-100 hover:shadow-md transition duration-300"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default HotelNav;
