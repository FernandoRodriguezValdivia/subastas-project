const Item = require('../../models/Item.model');
const Seller = require('../../models/Seller.model');

const createItem = async (data) => {
  try {
    const item = await Item.create(data);
    const seller = await Seller.findById(data.seller);
    seller.items = seller.items.concat(item._id);
    await seller.save();
    return item;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = createItem;
