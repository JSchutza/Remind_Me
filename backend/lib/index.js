// imports here:
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');
const { check, validationResult } = require('express-validator');
const { environment } = require("../config");
const asyncHandler = require('express-async-handler');
// making all imports easy below
const { setTokenCookie, restoreUser, requireAuth } = require('../auth.js');
// all of the db models below
const { User } = require('../db/models');


// variable that determines if the app is in production or not
const isProduction = environment === 'production';


const initApp = (the_app) => {
  the_app.use(logger('dev'));
  the_app.use(cookieParser());
  the_app.use(express.json());


  // Security Middleware
  if (!isProduction) {
    // enable cors only in development
    the_app.use(cors());
  }
  // helmet helps set a variety of headers to better secure your app
  the_app.use(helmet({ contentSecurityPolicy: false }));

  // Set the _csrf token and create req.csrfToken method
  the_app.use(csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    }
  }));

};





const setErrorHandlers = (the_app) => {
  // Catch unhandled requests and forward to error handler.
  the_app.use((request, response, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);

  });




  // Process sequelize errors
  the_app.use((err, request, response, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
      err.errors = err.errors.map((e) => e.message);
      err.title = 'Validation error';
    }
    next(err);
  });



  // Error formatter
  the_app.use((err, request, response, next) => {
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

};








// exports here:
module.exports = {
  express,
  logger,
  cors,
  csurf,
  helmet,
  cookieParser,

  ValidationError,
  check,
  validationResult,

  environment,
  asyncHandler,

  setTokenCookie,
  restoreUser,
  requireAuth,

  User,

  isProduction,
  initApp,
  setErrorHandlers
};
