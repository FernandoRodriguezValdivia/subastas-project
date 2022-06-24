const sellerRouter = require('express').Router();
const controller = require('./controllers');
const isAuthorizated = require('../middlewares/authorization.middleware');

sellerRouter.post('/create', controller.postCreate);
sellerRouter.post('/signin', controller.postSignIn);
sellerRouter.patch('/update', isAuthorizated, controller.postUpdate);

module.exports = sellerRouter;
