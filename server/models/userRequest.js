const mongoose = require("mongoose");
const updateVersioningPlugin = require('mongoose-update-versioning');

// function formatDate(date) {
//   var d = new Date(date),
//       month = '' + (d.getMonth() + 1),
//       day = '' + d.getDate(),
//       year = d.getFullYear();

//   if (month.length < 2) month = '0' + month;
//   if (day.length < 2) day = '0' + day;

//   return [day, month, year].join('-');
// }

const userRequestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },

  cost: { type: String, required: true }, // Free, Contact, Amount
  price: { type: Number },

  // startDate: { type: String, set: date => formatDate(date)  },
  // endDate: { type: String, set: date => formatDate(date) },

  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },

  signupby: { type: String },

  locationAddress: { type: String },
  //longitude: { type: String, required: true}, // Future requirement
  //latitude: { type: String, required: true}, // Future requirement

  status: { type: String, required: true, default: "Draft" },
  userName: { type: String, required: true, default: "svanc2121@gmail.com" },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

// userRequestSchema.pre("updateOne", function (next) {
//   console.log("**** pre updateONE>>>>>>>>>>>");
//   const now = new Date();
//   this.updated = now;
//   if (!this.created) {
//     this.created = now;
//   }
//   next();
// });

// userRequestSchema.pre('updateOne', function( next ) {
//   this.updateOne({}, { $inc: { __v: 1 } }, next );
// });

// auto update of the document version on every time.
userRequestSchema.plugin(updateVersioningPlugin);

const UserRequest = new mongoose.model("requests", userRequestSchema);

module.exports = UserRequest;
