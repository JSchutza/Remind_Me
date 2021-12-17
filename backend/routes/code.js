const { express, asyncHandler, requireAuth } = require('../lib');

const axios = require('axios');


// invoke router so we can use it
const router = express.Router();


// routes here:
// GET localhost:5000/api/code
router.get('/', requireAuth, asyncHandler(async(request, response)=> {
  const { language, script } = request.body;
  const baseURL = 'https://api.jdoodle.com/v1/execute';

  const data = {
    script: '<?php echo "works"; ?>',
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
  response.json({});


}));




// exports here:
module.exports = router;
