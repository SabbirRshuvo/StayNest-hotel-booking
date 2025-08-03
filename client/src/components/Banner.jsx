import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-start justify-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-white">
        <div className="absolute inset-0 bg-[url('../src/assets/heroImage.jpg')] bg-cover bg-center bg-no-repeat brightness-75 z-0"></div>
        {/* Top text */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Welcome to StayNest</h1>
          <p className="mt-4 text-lg">Book your stay in comfort and style</p>
        </div>

        <p className="text-xl mb-6 max-w-xl text-center">
          Book your stay in comfort and style with verified hotels worldwide.
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg w-full max-w-6xl mx-auto mt-10">
          <form className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Destination */}
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-700">
                <FaMapMarkerAlt className="mr-1" />
                Destination
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full focus:outline-none text-black"
              />
            </div>

            {/* Check in */}
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-700">
                <FaCalendarAlt className="mr-1" />
                Check in
              </label>
              <input
                type="date"
                className="input w-full text-black border border-gray-300 focus:outline-none"
              />
            </div>

            {/* Check out */}
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-700">
                <FaCalendarAlt className="mr-1" />
                Check out
              </label>
              <input
                type="date"
                className="input w-full text-black border border-gray-300 focus:outline-none"
              />
            </div>

            {/* Guests */}
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-700">
                <FaUser className="mr-1" />
                Guests
              </label>
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="input w-full text-black border focus:outline-none"
              />
            </div>

            {/* Search Button */}
            <div className="relative w-full group ">
              <Link to="/rooms" className="btn gap-2">
                Search
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Banner;
