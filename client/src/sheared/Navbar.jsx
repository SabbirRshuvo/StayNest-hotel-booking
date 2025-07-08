import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { assets } from "../assets/assets";
import AuthContext from "../provider/AuthContext";
const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/" },
    { name: "Experience", path: "/" },
    { name: "About", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

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
      setOpen(false);
    } catch (error) {
      console.error("logout error", error);
    }
  };
  console.log(user);

  return (
    <nav
      className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50  ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-800 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="group inline-block">
        <h2
          className={`text-xl md:text-2xl ${
            isScrolled ? "text-gray-800 " : "text-slate-200"
          }  relative pb-1`}
        >
          StayNest
          <span
            className={`block h-[2px] w-0 ${
              isScrolled ? "bg-black" : "bg-white"
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
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))}
        <button
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
            isScrolled ? "text-black" : "text-white"
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
          className={`${
            isScrolled && "invert"
          } h-7 transition-all duration-500 cursor-pointer`}
        />

        {user ? (
          <div className="relative flex items-center gap-2">
            <img
              onClick={() => setOpen(!open)}
              src={user?.photoURL || "user"}
              alt="profile"
              className="w-10 h-10 object-cover rounded-full cursor-pointer"
            />

            {open && (
              <div className="absolute right-0 top-12 rounded bg-white shadow-lg w-36 z-50  ">
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/sign-in"
            className="relative overflow-hidden group px-8 py-2.5 rounded-full border border-black text-gray-200 font-semibold ml-4 cursor-pointer"
          >
            <span className="relative z-10 transition duration-300 group-hover:text-black ">
              Sign In
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-white  transition-all duration-500 group-hover:w-full z-0"></span>
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt="menu"
          className={`${isScrolled && "invert"} h-4 cursor-pointer`}
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
          <img src={assets.closeIcon} alt="closemenu" className="h-6.5" />
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

        {/* modile section  */}
        {user ? (
          <div className="relative flex items-center gap-2">
            <img
              onClick={() => setOpen(!open)}
              src={user?.photoURL || "user"}
              alt="profile"
              className="w-10 h-10 object-cover rounded-full cursor-pointer"
            />

            {open && (
              <div className="absolute right-0 top-12 rounded bg-white shadow-lg w-36 z-50  ">
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            )}
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
