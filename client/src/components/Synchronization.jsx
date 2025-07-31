import image from "../assets/synchronization.jpg";

const Synchronization = () => {
  return (
    <div className="">
      <div className="w-full  px-6 md:px-16 py-12 space-y-20 max-w-7xl mx-auto min-h-[880px] flex text-center items-center">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* left Image*/}
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Booking overview"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          {/* Right Text */}
          <div className="md:w-1/2">
            <h4 className="uppercase text-yellow-500 py-3">
              Room Booking Features
            </h4>
            <h2 className="text-4xl font-semibold mb-6 text-gray-800">
              Synchronization with OTAs via iCal
            </h2>

            <p className="text-lg text-gray-700 mb-6 font-light tracking-wide ">
              Supports synchronization of reservation data between multiple
              booking platforms and your WordPress site,
              <span className="font-semibold">preventing overbooking</span>
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 text-base text-start">
              <li>
                Compatible with any platform that supports iCal: Airbnb,
                booking.com, Google Calendar, etc.
              </li>
              <li>
                <span className="font-bold">Two-way</span> synchronization.
                Easily generate and export calendars.
              </li>
              <li>
                Once external calendars are added, you can import them manually,
                or set intervals for{" "}
                <span className="font-bold">automatic import.</span>
              </li>
              <li>
                View imported data and logs with ease, and easily delete
                outdated data for better data management and site storage
                optimization.
              </li>
              <li>
                Check out our{" "}
                <a className="underline" href="#">
                  online documentation to
                </a>{" "}
                learn more.
              </li>
            </ul>
          </div>

          {/* Right Image */}
        </div>
      </div>
    </div>
  );
};

export default Synchronization;
