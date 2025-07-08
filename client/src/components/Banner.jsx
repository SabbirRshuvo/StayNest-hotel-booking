import { assets, cities } from "../assets/assets";

const Banner = () => {
  return (
    <div className="flex flex-col items-start justify-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('../src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center min-h-screen">
      {/* Top text */}
      <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
        The Ultimate Hotel Experience
      </p>

      <h1 className="font-playfair text-2xl sm:text-3xl md:text-5xl md:text-[56px] font-bold md:font-extrabold max-w-3xl mt-4 text-left sm:text-left">
        Discover Your Perfect Gateway Destination
      </h1>

      <p className="max-w-xl mt-2 text-sm md:text-base">
        Unparalleled luxury and comfort await at the world's most exclusive
        hotels and resorts. Start your journey today.
      </p>

      {/* Search Form */}
      <form className="bg-white text-gray-700 rounded-lg px-4 sm:px-6 py-6 flex flex-col md:flex-row md:items-end gap-4 w-full max-w-6xl mt-8">
        {/* Destination */}
        <div className="w-full md:w-1/4">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            placeholder="Type here"
            required
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none"
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city} key={index}></option>
            ))}
          </datalist>
        </div>

        {/* Check In */}
        <div className="w-full md:w-1/5">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Check Out */}
        <div className="w-full md:w-1/5">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Guests */}
        <div className="w-full md:w-1/6">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <img src={assets.guestsIcon} alt="" className="h-4" />
            <label htmlFor="guests">Guests</label>
          </div>
          <input
            min={1}
            max={10}
            id="guests"
            type="number"
            placeholder="0"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <button
            type="submit"
            className="relative group overflow-hidden rounded-md py-3 px-6 text-black border border-black flex items-center justify-center gap-2 w-full transition-all cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2 transition duration-300 group-hover:text-white">
              <img
                src={assets.searchIcon}
                alt="searchIcon"
                className="h-5 brightness-0 group-hover:brightness-200 transition duration-300"
              />
              <span className="text-sm font-medium">Search</span>
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 group-hover:w-full z-0"></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
