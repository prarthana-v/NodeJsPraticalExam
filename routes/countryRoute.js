const express = require("express");
const {
  changeStatus,
  countryPage,
  addcountryPage,
  addcountry,
  deletecountry,
  editcountry,
  updatecountry,
} = require("../controller/countryController");
const routes = express.Router();

routes.get("/", countryPage);
routes.get("/add", addcountryPage);
routes.post("/add", addcountry);
routes.get("/delete", deletecountry);
routes.get("/edit", editcountry);
routes.post("/update", updatecountry);
routes.get("/changeStatus", changeStatus);

module.exports = routes;
