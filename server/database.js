const mongoose = require('mongoose');
const config = require('./config');

const NODE_ENV = config.nodEnv;
const MONGO_URI = config.database[NODE_ENV];

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI.url);
    console.log(
      `MongoDb Connected: ${connection.connection.host} in ${NODE_ENV}`.cyan.underline
        .bold,
    );
    return connection;
  } catch (error) {
    return console.log(`MongoDb connection error: ${error}`);
  }
};

module.exports = connectToDb;
