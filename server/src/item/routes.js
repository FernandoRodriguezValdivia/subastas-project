const itemRouter = require('express').Router();
const controller = require('./controllers');
const isAuthorizated = require('../middlewares/authorization.middleware');

itemRouter.post('/create', isAuthorizated, controller.postCreate);

module.exports = itemRouter;
