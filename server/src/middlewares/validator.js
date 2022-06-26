const { validationResult } = require('express-validator');

const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next({ msg: 'Validation error', details: errors.errors });
  } else {
    next();
  }
};

module.exports = validator;
