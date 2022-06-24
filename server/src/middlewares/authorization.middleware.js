const jwt = require('jsonwebtoken');
const { secret } = require('../../config').token;

const isAuthorizated = (req, res, next) => {
  const token = req.headers.authorization.slice(7);
  try {
    const { id } = jwt.verify(token, secret);
    req.id = id;
    next();
  } catch (e) {
    res.status(403).json({ error: 'Unauthenticated' });
  }
};

module.exports = isAuthorizated;
