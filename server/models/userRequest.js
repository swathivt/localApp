const mongoose = require("mongoose");

const userRequestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },

  cost: { type: String, required: true }, // Free, Contact, Amount
  price: { type: Number },

  startDate: { type: Date },
  endDate: { type: Date },
  signupby: { type: String },

  location: { type: String },
  //longitude: { type: String, required: true}, // Future requirement
  //latitude: { type: String, required: true}, // Future requirement

  status: { type: String, required: true, default: "Draft" },
  userName: {type: String, required: true , default: "svanc2121@gmail.com" },
  created: { type: Date, default: Date.now },
  updated: { type: Date },
});

const UserRequest = new mongoose.model("requests", userRequestSchema);

module.exports = UserRequest;
