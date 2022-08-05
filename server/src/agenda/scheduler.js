const agenda = require('./index');

const schedule = {
  updateName: async (data) => {
    console.log('schedule');
    await agenda.schedule(`in ${data.time} seconds`, 'update-name-user', data);
  },
  update: async (data) => {
    await agenda.schedule(`in ${data.time} seconds`, 'update-item', data);
  },
  // sendWelcomeMail: async (data) => {
  //   await agenda.now("send-welcome-mail", data);
  // },
  // .... more methods that shedule tasks at the different intervals.
};

module.exports = { schedule };
