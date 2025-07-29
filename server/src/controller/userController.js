const { users } = require("../models/userModel");

const getAllUsers = async (req, res) => {
  const result = await users().find().toArray();
  res.send(result);
};

const createUser = async (req, res) => {
  const data = req.body;
  const result = await users().insertOne(data);
  res.send(result);
};

module.exports = { getAllUsers, createUser };
