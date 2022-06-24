const User = require('../../models/User.model');

const createUser = async (data) => {
  try {
    const user = await User.create(data);
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = createUser;
