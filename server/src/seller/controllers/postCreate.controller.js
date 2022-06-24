const { createSeller } = require('../services');

const postCreate = async (req, res, next) => {
  const data = req.body;
  try {
    const seller = await createSeller(data);
    res.status(201).json({ message: 'User Created', seller });
  } catch (e) {
    next(e.message);
  }
};

module.exports = postCreate;
