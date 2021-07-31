const express = require('express');
const imageController = require('../controllers/image.controller');

const imageUploader = require('../helpers/image-uploader');
const checkAuth = require('../middleware/check_auth');

const router = express.Router();

router.post('/upload',checkAuth.checkAuth,imageController.upload, imageUploader.upload.single('image'));

module.exports= router;