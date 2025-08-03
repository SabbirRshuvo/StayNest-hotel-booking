const Booking = require("../models/bookingModels");

const createBooking = async (req, res) => {
  try {
    const { checkIn, checkOut, guests } = req.body;

    const booking = new Booking({
      checkIn,
      checkOut,
      guests,
    });

    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error(" Booking error:", error);
    res.status(500).json({ error: "Failed to create booking" });
  }
};

module.exports = {
  createBooking,
};
