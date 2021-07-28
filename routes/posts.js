const express = require('express');
const postscontroller = require('../controllers/post.controller');

const router = express.Router();

router.get("/", postscontroller.index);

module.exports = router;