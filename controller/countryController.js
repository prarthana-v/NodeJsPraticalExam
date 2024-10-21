const countryModel = require("../model/countryModel");

const countryPage = async (req, res) => {
  try {
    const country = await countryModel.find({});
    return res.render("country/view_country", {
      country,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

const addcountryPage = (req, res) => {
  return res.render("country/add_country");
};

const addcountry = async (req, res) => {
  try {
    console.log(req.body);
    const { countryName } = req.body;
    await countryModel.create({
      country: countryName,
    });
    req.flash("success", "country has been successflly added!");

    return res.redirect("/country/add");
  } catch (error) {
    console.log(error);
    return false;
  }
};

const deletecountry = async (req, res) => {
  try {
    // console.log(req.query);
    const id = req.query.id;
    await countryModel.findByIdAndDelete(id);

    req.flash("success", "country Successfully delete");

    return res.redirect("/country");
  } catch (error) {
    console.log(error);
    return false;
  }
};

const editcountry = async (req, res) => {
  try {
    const id = req.query.id;
    let single = await countryModel.findById(id);
    console.log(single);

    return res.render("country/edit_country", {
      single,
    });
  } catch (err) {
    console.log(err);
    return false;
  }
};

const updatecountry = async (req, res) => {
  try {
    console.log(req.body);
    const { id, countryName, status } = req.body;
    await countryModel.findByIdAndUpdate(id, {
      country: countryName,
    });
    req.flash("success", "country Successfully update");
    return res.redirect("/country");
  } catch (error) {
    console.log(error);
    return false;
  }
};

const changeStatus = async (req, res) => {
  try {
    const status = req.query.status;
    const id = req.query.id;
    if (status == "active") {
      await countryModel.findByIdAndUpdate(id, { status: "deactive" });
      req.flash("success", "Status Successfully changed");
      return res.redirect("/country");
    } else {
      await countryModel.findByIdAndUpdate(id, { status: "active" });
      req.flash("success", "Status Successfully changed");
      return res.redirect("/country");
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  countryPage,
  addcountry,
  addcountryPage,
  deletecountry,
  editcountry,
  updatecountry,
  changeStatus,
};
