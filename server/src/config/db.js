const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;

let db;

const connectDB = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connectDB();
    db = client.db();
    console.log("mongodb connected successfully");
  } catch (error) {
    console.error("db connecting error");
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };
