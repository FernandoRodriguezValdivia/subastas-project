const errors = {
  'Error: Data incorrect': 'Error: Data incorrect',
  'ValidationError: email: email is already exists': 'email is already exists',
  'Invalid file': 'Invalid file',
  'Validation error': 'Validation error',
};

const handleError = (err, _req, res, _next) => {
  if (errors[err.msg]) {
    res.status(400).send({ error: errors[err.msg], details: err.details || '' });
  } else {
    console.log(err);
    res.status(500).send({ error: 'Internal error' });
  }
};

module.exports = handleError;
