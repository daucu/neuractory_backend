require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log(
      "Neuractory Backend Connected Successfuly-------👍---------------"
    );
  } catch (error) {
    console.log("(Neuractory Backend Connection error) ", error);
  }
};
module.exports = connectDB;
