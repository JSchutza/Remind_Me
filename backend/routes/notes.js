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



// used to create a note
// POST localhost:5000/api/notes/new
router.post('/new', asyncHandler(async (request, response) => {
  const { due_date, title, content, notebook_id } = request.body;

  const note = await Note.create({
    due_date,
    title,
    content,
    notebook_id: Number(notebook_id)
  });

  if(!note) {
    response.json({ message: "Error creating note."});
  }

  response.json({ note });

}));




// exports here:
module.exports = router;
