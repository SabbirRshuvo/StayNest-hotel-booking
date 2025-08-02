const { getDB } = require("../config/db");

async function findUserByEmail(email) {
  const db = getDB();
  return await db.collection("users").findOne({ email });
}

async function createUser(userData) {
  const db = getDB();
  return await db.collection("users").insertOne(userData);
}

module.exports = {
  findUserByEmail,
  createUser,
};
