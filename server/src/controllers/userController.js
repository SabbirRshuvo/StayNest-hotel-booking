const { getDB } = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, email, photoURL, phone, password } = req.body;

  if (!username || !email || !password || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const db = getDB();
    const userCollection = db.collection("users");

    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: "User already exits" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      email,
      password,
      photoURL,
      phone,
      createdAt: new Date(),
    };

    const result = await userCollection.insertOne(newUser);

    const token = jwt.sign(
      { userId: result.insertedId, email },
      process.send.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "user registered successfully",
      token,
      user: {
        id: result.insertedId,
        username,
        email,
        photoURL,
        phone,
      },
    });
  } catch (error) {
    console.error("register error", error);
    res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = { registerUser };
