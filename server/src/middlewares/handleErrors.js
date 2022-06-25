const errors = {
  'Error: Data incorrect': 'Error: Data incorrect',
  'ValidationError: email: email is already exists': 'email is already exists',
  'Invalid file': 'Invalid file',
};

const handleError = (err, _req, res, _next) => {
  if (errors[err]) {
    res.status(400).send({ error: errors[err] });
  } else {
    res.status(500).send({ error: 'Internal error' });
  }
};

module.exports = handleError;
