const cloudinary = require('../../../cloudinary');
const config = require('../../../config');

const { preset } = config.cloudinary;

const extensionesValidas = ['png', 'jpg', 'jpeg'];

const uploadImg = async (img) => {
  const name = img.name.split('.');
  const extension = name[name.length - 1];

  if (!extensionesValidas.includes(extension)) {
    throw new Error('Invalid file');
  }

  try {
    const { tempFilePath } = img;
    const upload = await cloudinary.uploader.upload(tempFilePath, {
      upload_preset: preset,
    });
    await cloudinary.api.delete_all_resources();
    return { imageUrl: upload.secure_url, imageId: upload.public_id };
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = uploadImg;
