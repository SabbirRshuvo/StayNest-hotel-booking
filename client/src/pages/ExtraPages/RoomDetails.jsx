import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const { state } = useLocation();
  const hotel = state?.hotel;

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const mutation = useMutation({
    mutationFn: async (bookingData) => {
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}/bookings`,
        bookingData
      );
      return response.data;
    },
    onSuccess: () => {
      Swal.fire({
        toast: true,
        icon: "success",
        title: "Booking successful!",
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    },
    onError: () => {
      Swal.fire({
        toast: true,
        icon: "error",
        title: "Booking failed!",
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
    });
  };

  if (!hotel) {
    return <div className="">Hotel Not Found</div>;
  }
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
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label>Check-in-date</label>
            <input
              type="date"
              name="checkIn"
              className="input input-bordered focus:outline-none"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Check-out-date</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              className="input input-bordered focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label>Guest</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
              className="input input-bordered focus:outline-none"
            />
          </div>
          <button type="submit" className="btn btn-accent focus:outline-none">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomDetails;
