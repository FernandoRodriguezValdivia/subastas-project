const Server = require('./src/Server');
const { server } = require('./config');
const connectToDb = require('./database');

connectToDb();
const PORT = server.port;

const app = new Server(PORT);

app.listen();
