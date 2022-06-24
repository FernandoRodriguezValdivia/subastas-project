const mongoose = require('mongoose');
const { hash } = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  nombres: {
    type: String,
  },
  apellidos: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: { type: String, required: true, minlength: 6, select: false },
});

userSchema.pre('save', async function save(next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await hash(this.password, 10);
  }
  next();
});

userSchema.plugin(uniqueValidator, { message: '{PATH} is already exists' });

module.exports = model('Seller', userSchema);
