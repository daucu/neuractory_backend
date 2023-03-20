require("dotenv").config();
const mongoose = require("mongoose");

// schema
const user_sehema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    reqired: true,
  },
  phone: {
    type: String,
    reqired: true,
  },
  country: {
    type: String,
  },

  image: {
    type: String,
  },
  uniqueKey: {
    type: String,
    // reqired: true,
  },
  plan: {
    type: String,
  },
  plan_duration: {
    type: String,
  },
  plan_start_date: {
    type: String,
  },
  plan_expiry_date: {
    type: String,
  },
  plan_price: {
    type: Number,
  },
  plan_slug: {
    type: String,
  },
});

module.exports = mongoose.model("users", user_sehema);
