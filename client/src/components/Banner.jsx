import { assets, cities } from "../assets/assets";

const Banner = () => {
  return (
    <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('../src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center h-screen">
      <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
        The Ultimate Hotel Experience
      </p>
      <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leadig-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Discover Your Perfet Gateway Destination
      </h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">
        Unparalled luxury and comfort awall at the world's most exclusive hotels
        and resorts Start your journey today.
      </p>
      <form className="bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto mt-8">
        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destination">
            {cities.map((city, index) => (
              <option value={city} key={index}></option>
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="">
          <div className="flex items-center gap-2">
            <img src={assets.guestsIcon} alt="" className="h-4" />
            <label htmlFor="checkOut">Guest</label>
          </div>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
            placeholder="0"
          />
        </div>

        <button className="relative group overflow-hidden rounded-md py-3 px-4 text-black border border-black flex items-center justify-center gap-1 my-auto cursor-pointer max-md:w-full max-md:py-1">
          <span className="relative z-10 flex items-center gap-1 transition duration-300 group-hover:text-white">
            <img
              src={assets.searchIcon}
              alt="searchIcon"
              className="h-7 brightness-0 group-hover:brightness-200 transition duration-300"
            />
            <span>Search</span>
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 group-hover:w-full z-0"></span>
        </button>
      </form>
    </div>
  );
};

export default Banner;
