const bcrypt = require("bcryptjs");
const { findUserByEmail, createUser } = require("../models/userModels");

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    await createUser(user);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
}

module.exports = {
  registerUser,
};
