const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/user');

const signup = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError(422, 'Bad signup data'));
  }

  const { username, email, password } = req.body;

  let foundUser;
  try {
    foundUser = await User.findOne({ email: email }).exec();
  } catch (err) {
    return next(new HttpError(500, err));
  }
  
  if (foundUser) {
    return next(new HttpError(422, 'Email address is already in use'));
  }

  const newUser = new User({
    username: username || 'test',
    email,
    password
  });

  try {
    await newUser.save();
  } catch (err) {
    return next(new HttpError(500, err));
  }

  res.status(201).json({
    message: 'Successfully signed up',
    user: newUser.toObject({ getters: true })
  });
}

const login = async (req, res, next) => {
  const error = validationResult(req);
  console.log(error)
  if (!error.isEmpty()) {
    console.log(typeof req.body.password)
    return next(new HttpError(422, 'Bad login data'));
  }

  const { email, password } = req.body;
  
  let foundUser;
  try {
    foundUser = await User.findOne({ email: email }).exec();
  } catch (err) {
    return next(new HttpError(500, err))
  }
  
  if (!foundUser) {
    return next(new HttpError(404, 'User not found'));
  }

  if (foundUser.password !== password) {
    return next(new HttpError(401, 'Credentials are incorrect'));
  }
  
  res.json({ isAdmin: foundUser.isAdmin });
}

exports.login = login;
exports.signup = signup;