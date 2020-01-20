// setting backend and server : 
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

const app = express();

// configuring data base and .env files
require('dotenv').config();
require('./config/database');

// routes:
var usersRouter = require('./routes/api/users')

// middlewares to set the request object
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// setting api routes before other routes so they get hit first:
app.use('/api/users',usersRouter);


// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  // Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
