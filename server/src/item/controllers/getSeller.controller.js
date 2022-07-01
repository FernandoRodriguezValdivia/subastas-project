const Item = require('../../models/Item.model');

const getSeller = async (req, res, next) => {
  const { id } = req;
  const items = await Item.find({ seller: id });
  res.status(201).json({ items });
};

module.exports = getSeller;
