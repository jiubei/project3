module.exports = function(app) {
  var locationController = require('../controllers/locationController');

  //set routes
  app.route('/locations')
    .get(locationController.index)
    .post(locationController.create);

  //set routes
  app.route('/locations/search')
    .get(locationController.search);

  //
  app.route('/locations/geonear')
    .post(locationController.dingding);
};
