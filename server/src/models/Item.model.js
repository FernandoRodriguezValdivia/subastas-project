const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const itemSchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
  },
  initialPrice: {
    type: Number,
  },
  finalPrice: {
    type: Number,
  },
  description: {
    type: String,
  },
  duration: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  imageId: {
    type: String,
  },
});

module.exports = model('Item', itemSchema);
