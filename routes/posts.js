const express = require('express');
const postscontroller = require('../controllers/post.controller');

const router = express.Router();

router.get("/", postscontroller.index);
router.post("/",postscontroller.save);
router.get("/:id",postscontroller.show);
router.patch("/:id",postscontroller.update);
router.delete("/:id",postscontroller.destroy);

module.exports = router;