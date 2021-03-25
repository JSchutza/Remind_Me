// const { restoreUser } = require("./auth");



// imports here:
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');


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





// Exports here:
module.exports = app;
