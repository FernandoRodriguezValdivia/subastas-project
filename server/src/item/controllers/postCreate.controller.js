const { createItem } = require('../services');

const postCreate = async (req, res, next) => {
  const data = req.body;
  const { id } = req;
  data.seller = id;
  try {
    // const img = await uploadImg(req.files.img);
    const img = { imageUrl: '', imageId: 'some id' };
    const item = await createItem({ ...data, ...img });
    res.status(201).json({ message: 'Item Created', item });
  } catch (e) {
    next(e.message);
  }
};

module.exports = postCreate;
