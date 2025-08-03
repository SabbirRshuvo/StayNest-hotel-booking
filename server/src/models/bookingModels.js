const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guests: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
