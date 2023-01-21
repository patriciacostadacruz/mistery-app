router.post('/login', async function (req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      res.render('auth/login', { error: 'Introduce email and password to log in' });
      return;
    }
    try {
      const userInDB = await User.findOne({ email: email });
      if (!userInDB) {
        res.render('auth/login', { error: `There are no users by ${email}` });
        return;
      } else {
        const passwordMatch = await bcrypt.compare(password, userInDB.hashedPassword);
        if (passwordMatch) {
          req.session.currentUser = userInDB;
          res.render('auth/profile', userInDB);
        } else {
          res.render('auth/login', { error: 'Unable to authenticate user' });
          return;
        }
      }
    } catch (error) {
      next(error)
    }
  });