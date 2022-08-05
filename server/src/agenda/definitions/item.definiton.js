const JobHandlers = require('../handlers');

const itemDefinitions = (agenda) => {
  agenda.define('update-item', JobHandlers.update);
};

module.exports = itemDefinitions;
