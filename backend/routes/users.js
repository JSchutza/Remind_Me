// imports here:
const express = require('express');
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler } = require("../lib/util");
const { loginUser, logoutUser } = require("../auth");

// invoke router so we can use it
const router = express.Router();

// API routes here:
// router.get('path here', ect....)




// exports here:
module.exports = router;
