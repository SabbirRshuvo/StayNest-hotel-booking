import { BiSolidHotel } from "react-icons/bi";
import { CiSearch, CiUser } from "react-icons/ci";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-auto container px-4 py-4 ">
      {/* logo */}
      <Link to="/" className="flex items-center text-gray-800 ">
        <BiSolidHotel className="font-semibold w-10 rounded-full h-10" />
        <h2 className="text-3xl">StayNest</h2>
      </Link>
      {/* links */}
      <div className="flex gap-4 text-xl">
        <NavLink>Home</NavLink>
        <NavLink>Hotels</NavLink>
        <NavLink>Experiences</NavLink>
        <NavLink>About</NavLink>
      </div>
      <div className="flex  gap-4 items-center">
        <div className="flex text-2xl gap-4">
          <CiSearch />
          <CiUser />
        </div>
        <Link className="border-0 border-gray-500 bg-gray-800 text-white rounded-4xl px-4 py-1">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
