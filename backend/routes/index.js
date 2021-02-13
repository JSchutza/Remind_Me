// imports here:
const express = require('express');
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler } = require("../lib/util");
const { loginUser, logoutUser } = require("../auth");


// invoke router so we can use it
const router = express.Router();



// MIGHT change ------------------
// for the home page
router.get('/', csrfProtection, (req, res) => {
  res.render('index', { csrfToken: req.csrfToken() })
});







// exports here:
module.exports = router;
