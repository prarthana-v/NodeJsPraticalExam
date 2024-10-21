const express = require("express");
const {
  cityPage,
  cityAddPage,
  cityAdd,
  citydelete,
  cityEditPage,
  cityUpdate,
} = require("../controller/cityController");
const routes = express.Router();

routes.get("/", cityPage);
routes.get("/add", cityAddPage);
routes.post("/add", cityAdd);
routes.get("/delete", citydelete);
routes.get("/edit", cityEditPage);
routes.post("/update", cityUpdate);

module.exports = routes;
