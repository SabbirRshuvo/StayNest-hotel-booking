import React from "react";

const ListRoom = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      type: "Suite",
      price: 120,
      status: "Available",
    },
    { id: 2, name: "Ocean View", type: "Double", price: 90, status: "Booked" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Room List</h1>
      <div className="overflow-x-auto bg-base-100 p-4 rounded shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Room Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id}>
                <td>{room.name}</td>
                <td>{room.type}</td>
                <td>${room.price}</td>
                <td>
                  <span
                    className={`badge ${
                      room.status === "Available"
                        ? "badge-success"
                        : room.status === "Booked"
                        ? "badge-warning"
                        : "badge-error"
                    }`}
                  >
                    {room.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline btn-info mr-2">
                    Edit
                  </button>
                  <button className="btn btn-sm btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
