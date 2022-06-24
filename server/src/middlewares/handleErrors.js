const errors = {
  'Error: Data incorrect': 'Error: Data incorrect',
  'ValidationError: email: email is already exists': 'email is already exists',
};

const handleError = (err, _req, res, _next) => {
  res.status(400).send({ error: errors[err] });
};

module.exports = handleError;
