const itemDefinitions = require('./item.definiton');

const definitions = [itemDefinitions];

const allDefinitions = (agenda) => {
  definitions.forEach((definition) => definition(agenda));
};

module.exports = allDefinitions;
