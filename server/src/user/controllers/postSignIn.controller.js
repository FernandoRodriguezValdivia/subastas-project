const { signInUser } = require('../services');

const postSignIn = async (req, res, next) => {
  const data = req.body;
  try {
    const token = await signInUser(data);
    res.status(201).send({ token, data });
  } catch (e) {
    next(e.message);
  }
};

module.exports = postSignIn;
