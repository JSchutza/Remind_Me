// imports here:
const { express, initApp, setErrorHandlers } = require('./lib');


// router here
const the_api = require('./routes/api.js');


const app = express();

// sets up necessary middleware
initApp(app);



// mount the api router here
app.use('/api', the_api);



// error handlers here:
setErrorHandlers(app);





// Exports here:
module.exports = app;
