require("dotenv").config({ silent: true });
const express = require("express");
const cors = require("cors");
dotenv = require("dotenv");
const { connectDB } = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
  });
});
