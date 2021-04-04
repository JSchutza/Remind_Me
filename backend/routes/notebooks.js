const { express, asyncHandler, Notebook } = require('../lib');







// invoke router so we can use it
const router = express.Router();





// routes here:


// GET localhost:5000/api/notebooks/:userId
router.get('/:userId(\\d+)', asyncHandler(async (request, response) => {
  const Id = request.params.userId;

  const notebooks = await Notebook.findAll({
    where: {
      notebook_owner: Id
    },
    attributes: [ "description", "name", "createdAt", "id" ],
  });

  response.json({ notebooks });

}));



// GET localhost:5000/api/notebooks/specific/:notebookId
router.get('/specific/:notebookId(\\d+)', asyncHandler(async (request, response) => {
  const Id = request.params.notebookId;

  const notebook = await Notebook.findByPk(Id);

  response.json({ notebook});
}));


// POST localhost:5000/api/notebooks/new
router.post('/new', asyncHandler(async (request, response) => {
  const { name, description, notebook_owner } = request.body;


  const just_created = await Notebook.create({
    name,
    description,
    notebook_owner: Number(notebook_owner)
  });



  if (!just_created) {
    response.json({ error: "Could not create a notebook."});
  }

  response.json({ just_created });
}));



// DELETE localhost:5000/api/notebooks/:notebookId/remove
router.delete('/:notebookId(\\d+)/remove', asyncHandler(async (request, response) => {
  const id = request.params.notebookId;

  const the_notebook = await Notebook.findByPk(id);

  if (the_notebook){
    await the_notebook.destroy();
    response.json({ status: 200 });
  }
  response.json({ message: "Error, could not find and remove the resource. "});

}));





// exports here:
module.exports = router;
