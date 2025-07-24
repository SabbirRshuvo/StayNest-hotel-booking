import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { assets } from "../assets/assets";
import AuthContext from "../provider/AuthContext";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/all-rooms" },
    { name: "Experience", path: "/" },
    { name: "About", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("logout error", error);
    }
  };
  console.log(user);

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled || !isHome
          ? "bg-white/80 shadow-md text-gray-800 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="group inline-block">
        <h2
          className={`text-xl md:text-2xl ${
            isScrolled || !isHome ? "text-gray-800" : "text-slate-200"
          } relative pb-1`}
        >
          StayNest
          <span
            className={`block h-[2px] w-0 ${
              isScrolled || !isHome ? "bg-slate-700" : "bg-white"
            } transition-all duration-300 group-hover:w-full absolute bottom-0 left-0`}
          ></span>
        </h2>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled || !isHome ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled || !isHome ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))}
        <button
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
            isScrolled || !isHome ? "text-black" : "text-white"
          } transition-all`}
        >
          Dashboard
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <img
          src={assets.searchIcon}
          alt="search"
          className={`h-7 transition-all duration-500 cursor-pointer 
    ${isScrolled && isHome && "invert"} 
    ${!isHome && "invert"} 
  `}
        />

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
            className="px-8 py-2.5 rounded-full border border-gray-400 text-gray-800 font-medium ml-4 cursor-pointer hover:bg-gray-100 hover:shadow-md transition duration-300"
          >
            Sign In
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt="menu"
          className={`h-4 cursor-pointer ${
            !isHome || isScrolled ? "invert" : ""
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="closeMenu" className="h-6.5" />
        </button>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="group inline-block relative pb-1 text-base font-medium transition duration-300 text-gray-700 hover:text-gray-500"
          >
            {link.name}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
          </a>
        ))}

        <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
          Dashboard
        </button>

        {/* middle section  */}
        {user ? (
          <div className="dropdown dropdown-center">
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
            className="relative overflow-hidden group px-8 py-1 rounded-full border border-black font-semibold  cursor-pointer"
          >
            <span className="relative z-10 transition duration-300 group-hover:text-gray-200 ">
              Sign In
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-black   transition-all duration-500 group-hover:w-full z-0"></span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
