const Agenda = require('agenda');

const allDefinitions = require('./definitions');
const config = require('../../config');

const NODE_ENV = config.nodEnv;
const MONGO_URI = config.database[NODE_ENV];

const dbUrl = MONGO_URI.url;

const agenda = new Agenda({
  db: {
    address: dbUrl,
    options: { useUnifiedTopology: true },
  },
});

agenda
  .on('ready', async () => {
    await agenda.start();
    console.log('Agenda started!');
  })
  .on('error', () => console.log('Agenda connection error!'));

// define all agenda jobs
allDefinitions(agenda);

// logs all registered jobs
console.log({ jobs: agenda._definitions });

module.exports = agenda;
