const { signInUser } = require('../services');

const postSignIn = async (req, res, next) => {
  const data = req.body;
  try {
    const response = await signInUser(data);
    res.status(201).json(response);
  } catch (e) {
    next({ msg: e.message });
  }
};

module.exports = postSignIn;
