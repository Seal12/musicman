let http = require('http'),
    fs = require('fs'),
    path = require('path'),
    express = require('express'),
    subdomain = require('express-subdomain'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');


let isProduction = process.env.NODE_ENV === 'production';


// Global app object
let app = express();

// Normal express config defaults
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'guardian-angel', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

if(isProduction){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  app.use(errorhandler());
  mongoose.connect('mongodb://localhost/musicman-db');
  mongoose.set('debug', true);
}

/* Model imports */
require('./models');

const routes = require('./routes');
app.use(subdomain('api', routes));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      }
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

app.listen( process.env.PORT || 8081, function(){
  console.log(`MusicMan [Info] : Started Server on port 8081`);
});
