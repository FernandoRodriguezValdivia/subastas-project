const Seller = require('../../models/Seller.model');

const postUpdate = async (req, res, next) => {
  const data = req.body;
  try {
    const user = await Seller.findByIdAndUpdate(req.id, data, { new: true });
    res.status(201).send({ message: 'update sucess', user });
  } catch (e) {
    next({ msg: e.message });
  }
};

module.exports = postUpdate;
