const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ContactUsSchema = require("../models/ContactUsSchema");
require("dotenv").config();

// code to get all contact us messages
router.get("/", async (req, res) => {
  try {
    const contactus = await ContactUsSchema.find();
    res.json(contactus);
  } catch (err) {
    res.json({ message: err.message, status: "error" });
  }
});

// code to post contact us messages
router.post("/", async (req, res) => {
  try {
    const contactus = new ContactUsSchema({
      name: req.body.name,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      date: req.body.date,
      time: req.body.time,
      message: req.body.message,
    });
    const savedContactUs = await contactus.save();
    res.status(201).json({ message: "Contact Us created", savedContactUs });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
