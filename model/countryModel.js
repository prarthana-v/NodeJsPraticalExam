const { name } = require("ejs");
const mongoose = require("mongoose");
const countrySchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
});
const country = mongoose.model("country", countrySchema);
module.exports = country;
