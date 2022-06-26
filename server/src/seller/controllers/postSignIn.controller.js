const { signInSeller } = require('../services');

const postSignIn = async (req, res, next) => {
  const data = req.body;
  try {
    const token = await signInSeller(data);
    res.status(201).send({ token, data });
  } catch (e) {
    next({ msg: e.message });
  }
};

module.exports = postSignIn;
