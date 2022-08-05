const Item = require('./models/Item.model');
const Notification = require('./models/Notification.model');
const User = require('./models/User.model');

const { schedule } = require('./agenda/scheduler');

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
        // falta crear notificacion en la bd y eliminar en caso exista notificacion en la misma subasta
        // it is necessary create the notification on db and delete if there is notification of same auction
        const user = await User.findById(payload.idUser);
        const oldNotification = await Notification.findOne({
          user: user._id,
          item: payload.idItem,
        });

        console.log(oldNotification);

        if (oldNotification) {
          console.log('ya existe la notificacion');
          user.notifications = user.notifications.filter((notification) => {
            return String(notification) !== String(oldNotification._id);
          });
          await Notification.findByIdAndDelete(oldNotification._id);
        }

        const newNotification = await Notification.create({
          user: payload.idUser,
          item: payload.idItem,
          title: 'Fuiste Superado',
          name: data.name,
        });

        user.notifications = user.notifications.concat(newNotification._id);
        await user.save();

        this.io.in(payload.idItem).emit('update', { ...payload });

        console.log('room de suscribe', data.user);

        // socket
        //   .to(data.user).emit(...)
        this.io.in(payload.idUser).emit('notification', {
          id: newNotification._id,
          name: data.name,
          title: 'Fuiste Superado',
          item: payload.idItem,
        });
        console.log('despues de emitir noti', payload);
      });

      socket.on('new-auction', async (payload) => {
        await schedule.update({ ...payload, socket });
      });

      socket.on('suscribe-notification', (payload) => {
        console.log('ingresando al room', payload);
        socket.join(payload.id);
        console.log('conectados al room suscribe', this.io.sockets.adapter.rooms);
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
