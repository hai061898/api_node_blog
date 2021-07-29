const express = require('express');
const postscontroller = require('../controllers/post.controller');

const router = express.Router();

router.get("/", postscontroller.index);
router.post("/",postscontroller.save);

module.exports = router;