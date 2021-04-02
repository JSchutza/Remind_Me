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


  const created_notebook = await Notebook.create({
    name,
    description,
    notebook_owner: Number(notebook_owner)
  });



  if (!created_notebook) {
    response.json({ error: "Could not create a notebook."});
  }

  response.json({ created_notebook });
}));


// exports here:
module.exports = router;
