// imports here:
const { express, asyncHandler, setTokenCookie, User, restoreUser, requireAuth } = require('../lib');


// invoke router so we can use it
const router = express.Router();





// routes here:

//POST  localhost:5000/api/users/login
router.post('/login', asyncHandler(async (request, response, next) => {
    const { credential, password } = request.body;

    const user = await User.login({ credential, password });

    if (user === false) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
    }

    setTokenCookie(response, user);

    response.json({ user });
}));



//DELETE localhost:5000/api/users/logout
router.delete('/logout', (request, response) => {
    // need to grab the token cookie and only if they have a token can they logout
    response.clearCookie('token');
    response.json({ message: 'You have successfully been logged out.' });
});







// exports here:
module.exports = router;
