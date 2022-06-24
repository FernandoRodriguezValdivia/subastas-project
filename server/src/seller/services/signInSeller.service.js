const { compare } = require('bcrypt');
const jwt = require('jsonwebtoken');
const Seller = require('../../models/Seller.model');
const { secret } = require('../../../config').token;

const verifiedPassword = async (passwordSent, passwordStored) => {
  const verified = await compare(passwordSent, passwordStored);
  return verified;
};

const signInSeller = async ({ email, password }) => {
  try {
    const user = await Seller.findOne({ email }).select(['+password']);
    if (user) {
      const verified = await verifiedPassword(password, user.password);
      if (verified) {
        const token = jwt.sign({ id: user._id }, secret);
        return token;
      }
      throw new Error('Data incorrect');
    } else {
      throw new Error('Data incorrect');
    }
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = signInSeller;
