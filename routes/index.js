const express = require('express');
const router = express.Router();
const validator = require('validator');
const PostController = require('../controllers/postController');
//create a get /posts rooute with the method index

.
router.get('/posts', PostController.index);
module.exports = router;