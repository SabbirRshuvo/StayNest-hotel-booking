import { useState } from "react";

const AddRoom = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    type: "",
    rating: "",
    price: "",
    facilities: [],
    image: null,
  });

  const facilitiesOptions = [
    "Wi-Fi",
    "AC",
    "Pool",
    "TV",
    "Mini Bar",
    "Parking",
  ];

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (type === "file") {
      setForm({ ...form, image: files[0] });
    } else if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        facilities: checked
          ? [...prev.facilities, value]
          : prev.facilities.filter((f) => f !== value),
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room submitted:", form);
    // You can send this to Firebase or your backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-100 p-6 rounded shadow space-y-6 max-w-3xl mx-auto"
    >
      <h1 className="text-2xl font-bold">Add New Room</h1>

      {/* Image Upload */}
      <div>
        <label className="block mb-1 font-medium">Room Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="file-input file-input-bordered w-full focus:outline-none"
          onChange={handleChange}
          required
        />
      </div>

      {/* Name & Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Room Name</label>
          <select
            name="type"
            className="select select-bordered w-full focus:outline-none"
            onChange={handleChange}
            required
          >
            <option disabled selected>
              Select type
            </option>
            <option>Mountain</option>
            <option>Beach</option>
            <option>Cityscape</option>
            <option>Luxury</option>
            <option>Countryside</option>
            <option>Seaside</option>
            <option>Hilltop</option>
            <option>Green Valley</option>
            <option>Skyline</option>
            <option>Sunset</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            className="input input-bordered w-full focus:outline-none"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Type & Rating */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Room Type</label>
          <select
            name="type"
            className="select select-bordered w-full focus:outline-none"
            onChange={handleChange}
            required
          >
            <option disabled selected>
              Select type
            </option>
            <option>Single</option>
            <option>Double</option>
            <option>Suite</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Rating</label>
          <select
            name="rating"
            className="select select-bordered w-full focus:outline-none"
            onChange={handleChange}
            required
          >
            <option disabled selected>
              Select rating
            </option>
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r}>{r} Star</option>
            ))}
          </select>
        </div>
      </div>

      {/* Price */}
      <div>
        <label className="block mb-1 font-medium">Price per Night</label>
        <input
          name="price"
          type="number"
          min={1}
          defaultValue={1}
          placeholder="Price per night"
          className="input input-bordered w-full focus:outline-none"
          onChange={handleChange}
          required
        />
      </div>

      {/* Facilities */}
      <div>
        <label className="block mb-2 font-medium">Facilities</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {facilitiesOptions.map((facility) => (
            <label key={facility} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="facilities"
                value={facility}
                onChange={handleChange}
              />
              <span>{facility}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-info w-full">
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;
