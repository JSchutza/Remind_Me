// imports here:
const express = require('express');
const { asyncHandler } = require("../lib/util");

// invoke router so we can use it
const router = express.Router();


// API routes here:
// router.get('path here', ect....)
router.get('/test', (req, res) => {
    res.json("success");
});





// exports here:
module.exports = router;
