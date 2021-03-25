// const { restoreUser } = require("./auth");



// imports here:
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');


// router here
const the_api = require('./routes/api.js');


const { environment } = require("./config");
const isProduction = environment === 'production';


const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());


// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}
// helmet helps set a variety of headers to better secure your app
app.use(helmet({
  contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
app.use( csurf({ cookie: { secure: isProduction, sameSite: isProduction && "Lax", httpOnly: true, }, }) );




// mount the api router here
app.use('/api', the_api);




// error handlers here:

// Catch unhandled requests and forward to error handler.
app.use((request, response, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});




// Process sequelize errors
app.use((err, request, response, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});



// Error formatter
app.use((err, request, response, next) => {
  response.status(err.status || 500);
  console.error(err);

  response.json(
    {
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
   }
  );

});



// Exports here:
module.exports = app;
