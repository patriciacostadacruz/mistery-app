const router = require("express").Router();
const User = require("../models/Users");
const isLoggedIn = require("../middleware");

/* GET profile edit page form */
router.get("/profile/edit/:id", async (req, res, next) => {
  const user = req.session.currentUser;
  const { id } = user;
  try {
    await User.findOne({id});
    res.render("profileEdit", user);
  } catch (error) {
    next(error);
  }
});

/* POST route to update data */
router.post("/profile/edit/:id", async (req, res, next) => {
  const { username, firstName, lastName, phone, city, age } = req.body;
  const { id } = req.params;
  try {
    const editedUser = await User.findByIdAndUpdate({id});
  } catch (error) {
    next(error);
  }
});

module.exports = router;