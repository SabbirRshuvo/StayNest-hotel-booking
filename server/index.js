const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const connectDB = require("./src/config/db");
const bookingRoutes = require("./src/routes/bookingRoute");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

const allowedOrigins = [
  "http://localhost:5173",
  "https://stay-nest-hotel-booking.web.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
connectDB();

app.use("/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Hotel Booking API is running on the server...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
