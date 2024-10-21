const { name } = require("ejs");
const mongoose = require("mongoose");
const stateSchema = mongoose.Schema({
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "country",
  },
  state: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
});
const state = mongoose.model("state", stateSchema);
module.exports = state;
