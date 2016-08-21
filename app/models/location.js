var mongoose = require('mongoose');

//create schema for locations
var locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  postalCode: {
    type: String,
    validate: {
      validator: function(po) {
        return /\d{6}/.test(po);
      },
      message: '{VALUE} is not a valid postal code'
    }
  },
  location: {
    type: String
  },
  pos : [Number]
});


locationSchema.index({ "pos" : "2dsphere"});

// locationSchema.query = {
//   circleDistAway: function( pos, dist){
//   return this.find()
//   }
// };






var Location = mongoose.model('Location', locationSchema);

module.exports = Location;
