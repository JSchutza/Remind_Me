const { express, asyncHandler, Note, requireAuth } = require('../lib');





// invoke router so we can use it
const router = express.Router();





// routes here:
// GET localhost:5000/api/notes/:notebookId
router.get('/:notebookId(\\d+)', requireAuth, asyncHandler(async (request, response) => {
  const Id = request.params.notebookId;

  const notes = await Note.findAll({
    where: {
      notebook_id: Id
    },
  });


  let result = {}
  if(notes.length > 0) {
    notes.forEach(note => {
      result[note.id] = note;
    });
  } else {
    result = null;
  }

  response.json({ notes: result });

}));



// used to create a note
// POST localhost:5000/api/notes/new
router.post('/new', requireAuth, asyncHandler(async (request, response) => {
  const { due_date, title, content, notebook_id } = request.body;
  const payload = { due_date, title, content, notebook_id };
  const note = await Note.validateBeforeCreation(payload);

  if(!note) {
    const errors = [ 'You must enter a title or your title was too short.', 'Error creating a note.' ];
    response.json({ errors });
  }

  response.json({ note });

}));





// DELETE  localhost:5000/api/notes/:noteId/delete
router.delete('/:noteId(\\d+)/delete', requireAuth, asyncHandler(async (request, response) => {
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
router.put('/:noteId(\\d+)/update', requireAuth, asyncHandler(async (request, response) => {
  const noteId = request.params.noteId;
  const { due_date, title, content, notebook_id } = request.body;
  const payload = { due_date, title, content, notebook_id };

  const note = await Note.validateBeforeUpdate(noteId, payload);

  if (!note) {
    const errors = [ 'You must enter a title or your title was too short.', 'Error updating your note.' ];
    response.json({ errors });
  }

  response.json({ note });

}));





// exports here:
module.exports = router;
