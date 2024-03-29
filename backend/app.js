// imports here:
const { express, initApp, setErrorHandlers } = require('./lib');


// router here
const users_router = require('./routes/users.js');
const notebooks_router = require('./routes/notebooks.js');
const notes_router = require('./routes/notes.js');
const tags_router = require('./routes/tags.js');
const code_runner_router = require('./routes/code.js');

const app = express();

// sets up necessary middleware
initApp(app);



// mount the api router here
app.use('/api/users', users_router);
app.use('/api/notebooks', notebooks_router);
app.use('/api/notes', notes_router);
app.use('/api/tags', tags_router);
app.use('/api/code', code_runner_router);






// for production set up
if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    // Serve the frontend's index.html file at the root route
    app.get('/', (request, response) => {
        response.cookie('XSRF-TOKEN', request.csrfToken());
        response.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
    });

    // Serve the static assets in the frontend's build folder
    app.use(express.static(path.resolve("../frontend/build")));

    // Serve the frontend's index.html file at all other routes NOT starting with /api
    app.get(/^(?!\/?api).*/, (request, response) => {
        response.cookie('XSRF-TOKEN', request.csrfToken());

        response.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
    });

}


// development set up
if (process.env.NODE_ENV !== 'production') {
    app.get('/api/csrf/restore', (request, response) => {
        response.cookie('XSRF-TOKEN', request.csrfToken());
        response.json({});
    });
}






// error handlers here:
setErrorHandlers(app);





// Exports here:
module.exports = app;
