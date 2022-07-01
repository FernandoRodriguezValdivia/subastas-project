const Item = require('./models/Item.model');

class Socket {
  constructor(io) {
    this.io = io;
    this.Events();
  }

  Events() {
    this.io.on('connection', (socket) => {
      socket.on('unirSub', (payload) => {
        socket.join(payload.idItem);
      });

      socket.on('add', async (payload) => {
        await Item.findByIdAndUpdate(payload.idItem, {
          user: payload.idUser,
          finalPrice: payload.cant,
        });
        socket.to(payload.idItem).emit('update', { ...payload });
        console.log(payload);
      });
    });
  }
}

module.exports = Socket;
