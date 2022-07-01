const { createItem, uploadImg } = require('../services');

const postCreate = async (req, res, next) => {
  const data = req.body;
  const { img } = req.files;
  console.log(img);
  const { id } = req;
  data.seller = id;

  try {
    const resImg = await uploadImg(img);
    // const img = { imageUrl: 'https://picsum.photos/200', imageId: 'some id' };
    const item = await createItem({ ...data, ...resImg });
    res.status(201).json({ message: 'Item Created', item });
  } catch (e) {
    next({ msg: e.message });
  }
};

module.exports = postCreate;
