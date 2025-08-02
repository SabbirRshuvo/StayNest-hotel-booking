import { useLocation, useParams } from "react-router";

const RoomDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const hotel = state?.hotel;
  if (!hotel) {
    return <div className="">Hotel Not Found</div>;
  }
  console.log(id);

  return (
    <div className="max-w-6xl mx-auto p-6 my-16">
      <h2 className="text-center py-4 text-2xl font-light">Hotel Details</h2>
      <img
        src={hotel.image}
        alt={hotel.name}
        className="rounded-lg shadow-lg w-full h-auto mb-6"
      />
      <h2 className="text-3xl font-bold text-gray-700 mb-2">{hotel.name}</h2>
      <p className="text-gray-600 mb-2">{hotel.location}</p>
      <p className="text-gray-700 mb-4">{hotel.description}</p>
      <p className="text-xl font-bold text-sky-600 mb-6">
        ${hotel.price}/night
      </p>

      {/* Booking Section */}
      <div className="mt-6 bg-base-200 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Book Your Stay</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="date"
            className="input input-bordered focus:outline-none"
          />
          <input
            type="date"
            className="input input-bordered focus:outline-none"
          />
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="input input-bordered focus:outline-none"
          />
          <button className="btn btn-accent focus:outline-none">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomDetails;
