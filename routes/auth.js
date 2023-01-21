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