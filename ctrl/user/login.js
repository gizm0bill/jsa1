const User = require('../user');
const passport = require('passport');

module.exports = (req, res, next) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();

  if (errors)
    return res.status(400).json({ errors });

  passport.authenticate('local', (err, user, info) =>
  {
    if (err) { return next(err); }
    if (!user)
      return res.status(401).json({ errors: info });
    
    req.logIn(user, (err) =>
    {
      if (err) { return next(err); }
      return res.json({ success: true });
    });
  })(req, res, next);
};

