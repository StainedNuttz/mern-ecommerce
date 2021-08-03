const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') { return next() }
  // Authorization: Bearer <token>
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      throw new Error('Authentication failed');
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userID = decodedToken.userID;
    req.userIsAdmin = decodedToken.isAdmin || false;
    return next();
  } catch (err) {
    return next(new HttpError(401, 'Authentication failed'));
  }
}