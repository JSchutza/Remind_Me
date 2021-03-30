// imports here
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers here:
import { userReducer } from '../reducers/session.js';
import { notebooksReducer } from '../reducers/notebooks.js';
import { notesReducer } from '../reducers/notes.js';

const rootReducer = combineReducers({
    userReducer,
    notebooksReducer,
    notesReducer,

});




let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}





const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};




export default configureStore;
