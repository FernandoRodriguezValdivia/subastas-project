const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
  },
  title: {
    type: String,
  },
  name: {
    type: String,
  },
});

module.exports = model('Notification', schema);
