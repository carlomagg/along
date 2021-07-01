// Initializes the `passengers` service on path `/passengers`
const { Passengers } = require('./passengers.class');
const createModel = require('../../models/passengers.model');
const hooks = require('./passengers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/passengers', new Passengers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('passengers');

  service.hooks(hooks);
};
