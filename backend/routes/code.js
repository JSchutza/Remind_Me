const { express, asyncHandler, requireAuth } = require('../lib');

const axios = require('axios');


// invoke router so we can use it
const router = express.Router();


// routes here:
// GET localhost:5000/api/code
router.get('/', requireAuth, asyncHandler(async(request, response)=> {
  const errors = ['Error when trying to run your code.'];
  const baseURL = 'https://api.jdoodle.com/v1/execute';

  const { language, script } = request.body;

  // if the code is invalid or there is a general error with the api
  if (!language || !script) {
    response.json({ errors });
    return;   // => need to return so that the axios request is not made
  }

  const data = {
    script,
    language,
    versionIndex: '0',
    clientId: process.env.COMPILE_CLIENT_ID,
    clientSecret: process.env.COMPILE_CLIENT_SECRET,
  };


  const result = await axios.post(baseURL, data).then(response => response.data);

  if (result.statusCode === 200) {
    response.json(result);
  }
  // if the code is invalid or there is a general error with the api
  response.json({ errors });


}));




// exports here:
module.exports = router;
