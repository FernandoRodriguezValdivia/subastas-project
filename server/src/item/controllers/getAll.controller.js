const Item = require('../../models/Item.model');

const getAll = async (req, res) => {
  const items = await Item.find({});
  res.status(200).json({ items });
};

module.exports = getAll;
