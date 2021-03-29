const { express, asyncHandler } = require('../lib');







// invoke router so we can use it
const router = express.Router();





// routes here:


// GET localhost:5000/api/notebooks
router.get('/', asyncHandler(async (request, response) => {
  const { user } = request;

  if(user === null) {
    response.json({ notebooks: "You currently do not have any notebooks created."});
  }

  const userId = user.id;
  // const notebooks = await
  const notebooks = "testing";
  response.json({ notebooks });

}));





// exports here:
module.exports = router;
