const { express, asyncHandler, Tag } = require('../lib');





// invoke router so we can use it
const router = express.Router();


// creator_id and note_id on the DB cannnot be null -- remember for implementation



// routes here:

// gets a specific tag by its id
// GET localhost:5000/api/tags/:tagId
router.get('/:tagId(\\d+)', asyncHandler(async (request, response) => {
  const their_tags = await Tag.findByPk(request.params.tagId)
  response.json({ their_tags });
}));







// gets all the tags in the DB
// GET localhost:5000/api/tags/all
router.get('/all', asyncHandler(async (request, response) => {
  const all_tags = await Tag.findAll();
  response.json({ all_tags });
}))




// gets all the tags for a specific user
// GET localhost:5000/api/tags/users/:creatorId
router.get('/users/:creatorId(\\d+)', asyncHandler(async (request, response) => {
  const userId = request.params.creatorId;
  const their_tags = await Tag.findAll({
    where: {
      creator_id: userId
    }
  });


  response.json({ their_tags });

}));




// exports here:
module.exports = router;
