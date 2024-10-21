const express = require("express");
const {
  subCatPage,
  addSubCatPage,
  addSubCat,
  deleteSubcat,
  editSubCat,
  SubCatUpdate,
  statePage,
  addstatePage,
  addstate,
  deletestate,
  editstate,
  stateUpdate,
} = require("../controller/stateController");
const routes = express.Router();

routes.get("/", statePage);
routes.get("/add", addstatePage);
routes.post("/add", addstate);
routes.get("/delete", deletestate);
routes.get("/edit", editstate);
routes.post("/update", stateUpdate);

module.exports = routes;
