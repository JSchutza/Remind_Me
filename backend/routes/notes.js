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


  let result = {}
  notes.forEach(note => {
    result[note.id] = note;
  });


  response.json({ notes: result });

}));



// used to create a note
// POST localhost:5000/api/notes/new
router.post('/new', asyncHandler(async (request, response) => {
  const { due_date, title, content, notebook_id } = request.body;
  const lastId = await Note.latestId();

  const note = await Note.create({
    id: Number(lastId.id) + 1,
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





// DELETE  localhost:5000/api/notes/:noteId/delete
router.delete('/:noteId(\\d+)/delete', asyncHandler(async (request, response) => {
  const id = request.params.noteId;
  const the_note = await Note.findByPk(id);
  const note = the_note;

  if(the_note) {
    await the_note.destroy();
    response.json({ note });
    response.status(200);
  }

  response.end();

}));



// PUT localhost:5000/api/notes/:noteId/update
router.put('/:noteId(\\d+)/update', asyncHandler(async (request, response) => {
  const id = request.params.noteId;

  const { due_date, title, content, notebook_id } = request.body;

  const note = await Note.findByPk(id)

  if(note){
    await note.update({
      due_date,
      title,
      content,
      notebook_id: Number(notebook_id)
    });

    response.json({ note });
  }

  response.json({ status: 500 });
}));



// exports here:
module.exports = router;
