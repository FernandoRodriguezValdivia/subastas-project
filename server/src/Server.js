require('colors');
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const socketio = require('socket.io');
const http = require('http');

const userRouter = require('./user/routes');
const sellerRouter = require('./seller/routes');
const itemRouter = require('./item/routes');
const handleErrors = require('./middlewares/handleErrors');
const Socket = require('./Socket');

class Server {
  constructor(port) {
    this.app = express();
    this.port = port;
    this.server = http.createServer(this.app);
    this.io = socketio(this.server);
    this.middlewares();
    this.routes();
    this.socketConfig();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
        createParentPath: true,
      }),
    );
  }

  routes() {
    this.app.use('/api/user', userRouter);
    this.app.use('/api/seller', sellerRouter);
    this.app.use('/api/item', itemRouter);
    this.app.use((_req, res) => {
      res.status(404).end();
    });
    this.app.use(handleErrors);
  }

  socketConfig() {
    new Socket(this.io);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`App listening on ${this.port}`);
    });
  }
}

module.exports = Server;
