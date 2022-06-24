const userRouter = require('express').Router();
const controller = require('./controllers');
const isAuthorizated = require('../middlewares/authorization.middleware');

userRouter.post('/create', controller.postCreate);
userRouter.post('/signin', controller.postSignIn);
userRouter.patch('/update', isAuthorizated, controller.postUpdate);

module.exports = userRouter;
