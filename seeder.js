const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./models/db.js");
const User = require("./models/userModel.js");
const users = require("./data/alumni.js");

const importData = async () => {
  try {
    await connectDB();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    await User.deleteMany();

    console.log("Data destroyed successfully");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
