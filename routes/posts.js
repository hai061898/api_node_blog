const express = require('express');
const postscontroller = require('../controllers/post.controller');
const checkAuthmiddleware = require("../middleware/check_auth")

const router = express.Router();

router.get("/",postscontroller.index);
router.post("/",checkAuthmiddleware.checkAuth ,postscontroller.save);
router.get("/:id",postscontroller.show);
router.patch("/:id",checkAuthmiddleware.checkAuth ,postscontroller.update);
router.delete("/:id",checkAuthmiddleware.checkAuth ,postscontroller.destroy);

module.exports = router;