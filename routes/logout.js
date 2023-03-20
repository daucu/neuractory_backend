const express = require("express");
const router = express.Router();
const User_Schema = require("../models/UserSignup");
require("dotenv").config();
const bcryptjs = require("bcryptjs");

router.get("/", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "User logged out successfully" });
});
module.exports = router;
