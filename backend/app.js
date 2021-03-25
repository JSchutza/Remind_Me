// imports here:
const { express, initApp, setErrorHandlers } = require('./lib');


// router here
const users_router = require('./routes/users.js');


const app = express();

// sets up necessary middleware
initApp(app);



// mount the api router here
app.use('/api/users', users_router);



// error handlers here:
setErrorHandlers(app);





// Exports here:
module.exports = app;
