require("dotenv").config({ silent: true });
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
let database;

async function connectDB() {
  try {
    await client.connect();
    database = client.db("hotel-booking");
    console.log(" Connected to MongoDB");
  } catch (error) {
    console.error(" Failed to connect DB", error);
    process.exit(1);
  }
}

function getDB() {
  return database;
}

module.exports = { connectDB, getDB };
