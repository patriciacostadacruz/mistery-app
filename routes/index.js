const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const user = req.session.currentUser;
  res.render('index', { title: 'Nakuru team', user: user });
});

/* profile route */
router.get("/profile", (req, res, next) => {
  const user = req.session.currentUser;
  res.render("profile", {user});
})

module.exports = router;
