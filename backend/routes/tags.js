const { express, asyncHandler, Tag } = require('../lib');





// invoke router so we can use it
const router = express.Router();





// routes here:

// not working how i thought ...
// GET localhost:5000/api/tags/
router.get('/:tagId(\\d+)', asyncHandler(async (request, response) => {
  const their_tags = await Tag.findByPk(request.params.tagId)

  response.json({ their_tags });


}));




// GET localhost:5000/api/tags/:creatorId
router.get('/:creatorId(\\d+)', asyncHandler(async (request, response) => {
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
