const Seller = require('../../models/Seller.model');

const createSeller = async (data) => {
  try {
    const seller = await Seller.create(data);
    return seller;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = createSeller;
