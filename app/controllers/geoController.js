var Geo = require('mongoose').model('Geo');

module.exports = {
  //get all locations
  dingding: function(req,res, next) {
  Geo.geoNear([0, 0], { spherical : true, maxDistance : 2.74268/111.12, limit: 10 }, function (err, results, stats) {
  res.json(results);
  // res.json(stats);

});
  },

  index: function(req, res, next) {
    Geo.find({}, function(err, geos){
      if(err) return next(err);
      res.json(geos);
    });
  },
  //create new location
  create: function(req, res, next) {
    var new_geo = new Geo(req.body);

    new_geo.save(function(err){
      //set error messages
      if(err) {
        var err_message = {
          "message": err.errors,
          "status_code": 400
        };
        return res.status(400).send(err);
      }
      res.json(new_geo);
    });
  },

};
