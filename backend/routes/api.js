// imports here:
const { express } = require('../lib');


// invoke router so we can use it
const router = express.Router();




// API routes here:
// router.get('path here', ect....)
router.get('/test', (request, response) => {
    response.json("success");
});





// exports here:
module.exports = router;
