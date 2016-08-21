var Location = require('mongoose').model('Location');

module.exports = {

//from geoController
dingding: function(req, res, next) {
Location.geoNear(req.body.latLong, { spherical : true, maxDistance : req.body.maxD * 2.74268 / 111.12, limit: 10 }, function (err, results, stats) {
    console.log(stats);
res.json(results);
// res.json(stats);
});
},

  //get all locations
  index: function(req, res, next) {
    Location.find({}, function(err, locations){
      if(err) return next(err);
      res.json(locations);
    });
  },
  //create new location
  create: function(req, res, next) {
    var new_location = new Location(req.body);

    new_location.save(function(err){
      //set error messages
      if(err) {
        var err_message = {
          "message": err.errors,
          "status_code": 400
        };
        return res.status(400).send(err);
      }
      res.json(new_location);
    });
  },
  //search based on query params
  search: function(req, res, next){
    //check if query is on specific attribute in db
    if(req.query.attrQ){
      delete req.query.attrQ;
      Location.find(req.query).exec(function(err, location){
          if(err) return next(err);
          res.send(location);
      });
    }else{
      res.send("Return locations from current locations");
    }
  }
};
