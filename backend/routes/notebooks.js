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


  let result = {};
  if(notebooks.length > 0) {
    notebooks.forEach(eachNotebook => {
      result[eachNotebook.id] = eachNotebook;
    });
  } else {
    result = null;
  }

  response.json({ notebooks: result });

}));


// GET localhost:5000/api/notebooks/limit/:amount/:notebookOwner
router.get('/limit/:amount(\\d+)/:notebookOwner(\\d+)', asyncHandler(async (request, response)=> {
  const amount = request.params.amount;
  const notebookOwner = request.params.notebookOwner;


  const notebooks = await Notebook.findAll({ order: [['id','DESC']], limit: Number(amount), where: {
    notebook_owner: Number(notebookOwner)
  } });
  // normalize data here
  const result = {};
  notebooks.forEach(eachNotebook => {
    result[eachNotebook.id] = eachNotebook;
  });

  response.json({ notebooks: result });

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

  const just_created = Notebook.validateBeforeCreation({ name, description, notebook_owner });

  if (!just_created){
    const errors = [ 'Must enter a name or your name was too short.', "Error when creating a notebook." ];
    response.json({ errors });
  }

  response.json({ just_created });

}));



// PUT localhost:5000/api/notebooks/:notebookId/update
router.put('/:notebookId(\\d+)/update', asyncHandler(async (request, response) => {
  const notebookId = request.params.notebookId;
  const { name, description } = request.body;
  const payload = { name, description };
  const notebook = await Notebook.validateBeforeUpdate(notebookId, payload);

  if (!notebook) {
    const errors = [ 'Must enter a name or your name was too short.', "Error finding previous notebook." ];
    response.json({ errors });
  }

  response.json({ notebook });

}));




// DELETE localhost:5000/api/notebooks/:notebookId/remove
router.delete('/:notebookId(\\d+)/remove', asyncHandler(async (request, response) => {
  const id = request.params.notebookId;

  const the_notebook = await Notebook.findByPk(id);
  const notebook = the_notebook;

  if (the_notebook){
    await the_notebook.destroy();
    response.json({ notebook });
  }

  response.end();

}));





// exports here:
module.exports = router;
