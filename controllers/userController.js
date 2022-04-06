const User = require('../model/User.js');
const validator = require('validator');

exports.getRegister = (req, res, next) => {
  res.render('index', {
    success: req.flash('success'),
    error: req.flash('error')
  });
}

exports.postRegister = (req, res, next) => {
  const email = validator.isEmail(req.body.email);
  const password = validator.isLength(req.body.password, {min: 1 });
  const name = validator.isLength(req.body.name, {min:1});

  if(email && password && name) {
    const person = User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    req.flash('success', 'you have successfully registered.')
    res.redirect('/')
  } else {
    req.flash('error', 'something went wrong.')
    res.redirect('/')
  }
}