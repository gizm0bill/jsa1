const User = require('../user');
const passport = require('passport');

module.exports = (req, res, next) =>
{
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password must be at least 4 characters long').len(4);
  req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);
  req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();

  if (errors)
    return req.status(400).json({ errors });

  const user = User.add
  ({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (err) { return next(err); }
    if (existingUser) 
      return res.status(400).json({errors: { msg: 'Account with that email address already exists.' } });
    // ....
  });
};
