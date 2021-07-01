const users = require('./users/users.service.js');
const passengers = require('./passengers/passengers.service.js');
const drivers = require('./drivers/drivers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(passengers);
  app.configure(drivers);
};
