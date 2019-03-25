'use strict';
module.exports = function(app) {
  var vehicle = require('../controllers/vehicleController'),
  userHandlers = require('../controllers/userController'),
  category = require('../controllers/categoryController'),
  role = require('../controllers/roleController'),
  usage = require('../controllers/usageController');

  // vehicle Routes
  app.route('/vehicles')
    .get(vehicle.list_all_vehicles)
    .post(userHandlers.loginRequired, vehicle.create_a_vehicle);

  app.route('/vehicles/:vehicleId')
    .get(vehicle.read_a_vehicle)
    .put(vehicle.update_a_vehicle)
    .delete(vehicle.delete_a_vehicle);

  // user Routes
  app.route('/auth/register')
    .post(userHandlers.register);

  app.route('/auth/sign_in')
    .post(userHandlers.sign_in);

  // category Routes
  app.route('/categories')
    .get(category.list_all_categories)

  // role Routes
  app.route('/roles')
    .get(role.list_all_roles)

  // usage Routes
  app.route('/usages')
    .get(usage.list_all_usages)

};