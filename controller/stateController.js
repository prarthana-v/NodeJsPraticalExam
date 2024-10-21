const countryModel = require("../model/countryModel");
const stateModel = require("../model/stateModel");

const statePage = async (req, res) => {
  const state = await stateModel.find({}).populate("countryId");
  // console.log(stateegory);

  return res.render("state/view_state", {
    state: state,
  });
};

const addstatePage = async (req, res) => {
  const country = await countryModel.find({ status: "active" });
  return res.render("state/add_state", {
    country: country,
  });
};

const addstate = async (req, res) => {
  try {
    const { country, state } = req.body;
    console.log(req.body, "oii");

    await stateModel.create({
      countryId: country,
      state: state,
    });

    req.flash("success", "state successfully add");

    return res.redirect("/state/add");
  } catch (error) {
    console.log(error);
    return false;
  }
};

const deletestate = async (req, res) => {
  try {
    const id = req.query.id;
    await stateModel.findByIdAndDelete(id);
    console.log("state deleted!!");
    return res.redirect("/state");
  } catch (error) {
    console.log(error);
    return false;
  }
};

const editstate = async (req, res) => {
  try {
    const id = req.query.id;
    const country = await countryModel.find({ status: "active" });
    let single = await stateModel.findById(id).populate("countryId");
    // console.log(single);

    return res.render("state/edit_state", {
      single,
      country,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

const stateUpdate = async (req, res) => {
  try {
    console.log(req.body);

    const { id, country, state } = req.body;
    await stateModel.findByIdAndUpdate(id, {
      countryId: country,
      state: state,
    });
    return res.redirect("/state");
  } catch (error) {
    console.log(error);
    return false;
  }
};
module.exports = {
  statePage,
  addstatePage,
  addstate,
  deletestate,
  editstate,
  stateUpdate,
};
