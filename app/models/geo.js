var mongoose = require('mongoose');

var geoSchema = new mongoose.Schema({
  pos : [Number],
  type: String
});

geoSchema.index({ "pos" : "2dsphere"});

var Geo = mongoose.model('Geo', geoSchema);

module.exports = Geo;
