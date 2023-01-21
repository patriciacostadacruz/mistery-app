const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET sign up view. */
router.get('/signup', function (req, res, next) {
    res.render('auth/signup');
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
       res.clearCookie('show-app')
       res.redirect('/auth/login');
     }
   });
 });

module.exports = router;