require('colors');
const express = require('express');
const cors = require('cors');
const userRouter = require('./user/routes');
const sellerRouter = require('./seller/routes');
const handleErrors = require('./middlewares/handleErrors');

class Server {
  constructor(port) {
    this.app = express();
    this.port = port;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/api/user', userRouter);
    this.app.use('/api/seller', sellerRouter);
    this.app.use((_req, res) => {
      res.status(404).end();
    });
    this.app.use(handleErrors);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on ${this.port}`);
    });
  }
}

module.exports = Server;
