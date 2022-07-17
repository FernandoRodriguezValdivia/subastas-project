const Item = require('./models/Item.model');
const User = require('./models/User.model');

class Socket {
  constructor(io) {
    this.io = io;
    this.Events();
  }

  Events() {
    this.io.on('connection', (socket) => {
      console.log('conectado');

      socket.on('room', (idRoom) => {
        console.log('ingresando al room');
        socket.join(idRoom);
        console.log('conectados al room', this.io.sockets.adapter.rooms);
      });

      socket.on('salir', (idRoom) => {
        console.log('saliendo al room');
        socket.leave(idRoom);
        console.log('desconectados al room', this.io.sockets.adapter.rooms);
      });

      socket.on('unirSub', (payload) => {
        socket.join(payload.idItem);
      });

      socket.on('add', async (payload) => {
        console.log(payload.idItem);
        const data = await Item.findByIdAndUpdate(payload.idItem, {
          user: payload.idUser,
          finalPrice: payload.cant,
          userName: payload.newName,
        });
        console.log('llegando datos', payload);
        this.io.in(payload.idItem).emit('update', { ...payload });
        this.socket.to(data.user).emit('new-notification-sub', { name: data.name });
        console.log(payload);
      });

      socket.on('new-auction', async (payload) => {
        const item = await Item.findById(payload.id);
        const user = await User.findById(item.user);
        user.items = user.items.concat(item._id);
        await user.save();
      });

      socket.on('suscribe-notification', (payload) => {
        socket.join(payload.id);
      });

      socket.on('unsubscribe-notification', (payload) => {
        socket.leave(payload.id);
      });

      socket.on('disconnect', () => {
        console.log('desconectado');
      });
    });
  }
}

module.exports = Socket;
