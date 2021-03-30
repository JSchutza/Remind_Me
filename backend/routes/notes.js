const { express, asyncHandler, Note } = require('../lib');





// invoke router so we can use it
const router = express.Router();





// routes here:
// GET localhost:5000/api/notes/:notebookId
router.get('/:notebookId(\\d+)', asyncHandler(async (request, response) => {
  const Id = request.params.notebookId;

  const notes = await Note.findAll({
    where: {
      notebook_id: Id
    },
  });


  response.json({ notes });

}));






// exports here:
module.exports = router;
