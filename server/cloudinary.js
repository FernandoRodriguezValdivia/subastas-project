const cloudinary = require('cloudinary').v2;
const config = require('./config');

const { url } = config.cloudinary;
cloudinary.config(url);

module.exports = cloudinary;
