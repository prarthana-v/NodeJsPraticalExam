const countryModel = require("../model/countryModel");
const stateModel = require("../model/stateModel");
const cityModel = require("../model/cityModel");

const cityPage = async (req, res) => {
  console.log("hii ginie");
  const city = await cityModel
    .find({})
    .populate("countryId")
    .populate("stateId");

  console.log(city);

  return res.render("city/view_city", {
    city: city,
  });
};

const cityAddPage = async (req, res) => {
  try {
    const country = await countryModel.find({ status: "active" });
    const state = await stateModel.find({ status: "active" });

    // console.log("c", country, "sc", state);

    return res.render("city/add_city", {
      country: country,
      state: state,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

const cityAdd = async (req, res) => {
  try {
    console.log(req.body, "city");
    const { country, state, city } = req.body;
    const cities = await cityModel.create({
      countryId: country,
      stateId: state,
      city: city,
    });
    console.log(cities);

    return res.redirect("/city/add");
  } catch (error) {
    console.log(error);
    return false;
  }
};

const citydelete = async (req, res) => {
  try {
    // console.log(req.query, "id");
    const id = req.query.id;
    await cityModel.findByIdAndDelete(id);
    return res.redirect("/city");
  } catch (error) {
    console.log(error);
    return false;
  }
};

const cityEditPage = async (req, res) => {
  try {
    // console.log(req.query);
    const id = req.query.id;

    const country = await countryModel.find({ status: "active" });
    const state = await stateModel.find({ status: "active" });
    const single = await cityModel
      .findById(id)
      .populate("countryId")
      .populate("subcountryId")
      .populate("cityId");

    console.log(single, "s");

    return res.render("city/edit_city", {
      country,
      state,
      single,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

const cityUpdate = async (req, res) => {
  try {
    console.log(req.body);

    const { id, country, state, city } = req.body;
    await cityModel.findByIdAndUpdate(id, {
      countryId: country,
      stateId: state,
      city: city,
    });
    return res.redirect("/city");
  } catch (error) {
    console.log(error);
    return false;
  }
};
module.exports = {
  cityPage,
  cityAddPage,
  cityAdd,
  citydelete,
  cityEditPage,
  cityUpdate,
};
