// imports here:
const { express, asyncHandler, setTokenCookie, User, restoreUser, validateLogin, validateSignup } = require('../lib');


// invoke router so we can use it
const router = express.Router();





// routes here:

//POST  localhost:5000/api/users/login
router.post('/login', asyncHandler(async (request, response) => {
    const { credential, password } = request.body;

    const user = await User.login({ credential, password });

    if (user === false) {
        const errors = ['The provided credentials were invalid.'];
        response.json({ errors });
    }

    setTokenCookie(response, user);

    response.json({ user });
}));



//DELETE localhost:5000/api/users/logout
router.delete('/logout', (request, response) => {
    // need to grab the token cookie and only if they have a token can they logout
    response.clearCookie('token');
    response.json({ user: null });

});



//POST localhost:5000/api/users/signup
router.post('/signup', asyncHandler(async (request, response) => {
    const { email, password, username } = request.body;

    const user = await User.signup({ email, username, password });

    if (user === false) {
        const errors = ['Signup failed'];
        response.json({ errors });
    }

    setTokenCookie(response, user);

    response.json({ user });
}));



//GET localhost:5000/api/users/
// do not change implementation -- is specific to the react components

router.get('/', restoreUser, (request, response) => {
    const { user } = request;

    if (user) {
        response.json({ user: user.toSafeObject() });
    }


    response.json({ user: null });
});






// exports here:
module.exports = router;
