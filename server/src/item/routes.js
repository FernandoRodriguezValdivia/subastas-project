const itemRouter = require('express').Router();
const { check } = require('express-validator');
const controller = require('./controllers');
const isAuthorizated = require('../middlewares/authorization.middleware');
const validator = require('../middlewares/validator');

itemRouter.post(
  '/create',
  [
    check('name', 'nombre es requerido').not().isEmpty(),
    check('initialPrice', 'initialPrice es requerido').not().isEmpty(),
    check('description', 'description es requerido').not().isEmpty(),
    check('duration', 'duration es requerido').not().isEmpty(),
    validator,
  ],
  isAuthorizated,
  controller.postCreate,
);

itemRouter.get('/get', isAuthorizated, controller.getSeller);
itemRouter.get('/all', controller.getAll);

module.exports = itemRouter;
