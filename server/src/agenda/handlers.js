const services = require('./agenda.services');

const JobHandlers = {
  update: async (job) => {
    const { data } = job.attrs;
    await services.update(data);
  },
};

module.exports = JobHandlers;
