const { compare } = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User.model');
const { secret } = require('../../../config').token;

const verifiedPassword = async (passwordSent, passwordStored) => {
  const verified = await compare(passwordSent, passwordStored);
  return verified;
};

const signInUser = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email }).select(['+password']);
    if (user) {
      const verified = await verifiedPassword(password, user.password);
      if (verified) {
        const token = jwt.sign({ id: user._id }, secret);
        return { token, nombres: user.nombres, tipoUser: 'user', id: user._id };
      }
      throw new Error('Data incorrect');
    } else {
      throw new Error('Data incorrect');
    }
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = signInUser;
