// imports here:
const { express, asyncHandler, setTokenCookie, User, restoreUser, requireAuth } = require('../lib');


// invoke router so we can use it
const router = express.Router();




// API routes here:
// router.get('path here', ect....)

//* testing 1
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'demo-user'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

//* testing 2
// router.get('/restore-user', restoreUser, (req, res) => {
//     return res.json(req.user);
// });

//* testing 3
// router.get('/require-auth', requireAuth, (req, res) => {
//     return res.json(req.user);
// });









// exports here:
module.exports = router;
