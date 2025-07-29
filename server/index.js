const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./src/config/db");
const userRoutes = require("../server/src/routes/userRoute");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  console.log("api is running");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
