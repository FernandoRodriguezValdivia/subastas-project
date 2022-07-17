const Item = require('../../models/Item.model');

const getActive = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);

  res.status(200).json({ success: true, item });
};

module.exports = getActive;
