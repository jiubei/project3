var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function(){
  var app = express();

  //set npm for logging or compression depending on env
  if(! process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production'){
    app.use(compress());
  }

  //for request parsing
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(bodyParser.json());
  app.use(methodOverride());

  //require routes
  require('../app/routes/location.routes')(app);
  // require('../app/routes/user.routes')(app);
  // require('../app/routes/static.routes')(app);

  return app;

};
