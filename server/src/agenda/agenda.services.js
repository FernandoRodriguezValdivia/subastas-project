const Item = require('../models/Item.model');
const User = require('../models/User.model');

const update = async (payload) => {
  const { socket, id } = payload;
  const item = await Item.findById(id);
  const user = await User.findById(item.user);
  user.items = user.items.concat(item._id);
  await user.save();
  socket.to(user._id).emit('notification', { name: item.name, title: 'Ganaste' });
};

module.exports = { update };
