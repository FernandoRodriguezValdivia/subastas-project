const sellerRouter = require('express').Router();
const { check } = require('express-validator');

const controller = require('./controllers');
const isAuthorizated = require('../middlewares/authorization.middleware');
const validator = require('../middlewares/validator');

sellerRouter.post(
  '/create',
  [
    check('email', 'El correo no es válido').isEmail(),
    check('nombres', 'El nombre es obligatorio').not().isEmpty(),
    check('apellidos', 'El apellido es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validator,
  ],
  controller.postCreate,
);
sellerRouter.post('/signin', controller.postSignIn);
sellerRouter.patch('/update', isAuthorizated, controller.postUpdate);

module.exports = sellerRouter;
