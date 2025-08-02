require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
let db;
console.log(uri);

async function connectDB() {
  try {
    await client.connect();
    db = client.db(); // default db from URI
    console.log(" Connected to MongoDB");
  } catch (error) {
    console.error(" Failed to connect DB", error);
    process.exit(1);
  }
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };
