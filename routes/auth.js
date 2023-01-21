const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/Users");
const isLoggedIn = require("../middleware");

/* POST route to add sign up data in DB */
router.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.render("auth/signup", { error: "All fields are necessarey to sign up"});
    return;
  }
  const usernameInDB = await User.findOne({username});
  if (usernameInDB) {
    res.render("auth/signup", { error: `Username must be unique, ${username} is already in use.`});
  }
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.render("auth/signup", { error: "Password needs to contain at least 6 characters, one number and one lowercase and uppercase character."});
    return;
  }
  try {
    const userInDB = await User.findOne({email: email});
    if (userInDB) {
      res.render("auth/signup", { error: `User already exists for email: ${email}`});
      return;
    } else {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await User.create({ username, email, hashedPassword });
      res.render("profile", {user});
    }
  } catch(error) {
      next(error);
  }
});