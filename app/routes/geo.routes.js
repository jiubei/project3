module.exports = function(app) {
  var geoController = require('../controllers/geoController');

  //set routes
  app.route('/geo')
    .get(geoController.index)
    .post(geoController.create);
  app.route('/geo/show')
  .get(geoController.dingding);
};
