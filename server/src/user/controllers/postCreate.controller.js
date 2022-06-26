const { createUser } = require('../services');

const postCreate = async (req, res, next) => {
  const data = req.body;
  try {
    const user = await createUser(data);
    res.status(201).json({ message: 'User Created', user });
  } catch (e) {
    next({ msg: e.message });
  }
};

module.exports = postCreate;
