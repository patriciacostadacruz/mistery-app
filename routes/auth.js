const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/Users");
const isLoggedIn = require("../middleware");

/* GET sign up view. */
router.get('/signup', function (req, res, next) {
    res.render('auth/signup');
  });
   
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




/* GET log in view. */
router.get('/login', function (req, res, next) {
    res.render('auth/login');
  });

/* GET logout */
router.get('/logout', (req, res, next) => {
   req.session.destroy((err) => {
     if (err) {
       next(err)
     } else {
       res.clearCookie('nakuru')
       res.redirect('/auth/login');
     }
   });
 });

module.exports = router;
