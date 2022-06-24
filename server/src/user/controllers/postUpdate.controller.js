const User = require('../../models/User.model');

const postUpdate = async (req, res, next) => {
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.id, data, { new: true });
    res.status(201).send({ message: 'update sucess', user });
  } catch (e) {
    next(e.message);
  }
};

module.exports = postUpdate;
