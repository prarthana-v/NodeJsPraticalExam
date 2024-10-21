const express = require("express");
const routes = express.Router();

routes.use("/", require("./authRoute"));
routes.use("/country", require("./countryRoute"));
routes.use("/state", require("./stateRoute"));
routes.use("/city", require("./cityRoute"));

module.exports = routes;
