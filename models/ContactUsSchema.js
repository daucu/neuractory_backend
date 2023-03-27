const mongoose = require("mongoose");
const contactusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("ContactUs", contactusSchema);
