const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validator = require('validator');


router.get('/', userController.getRegister);
router.post('/submit-post', userController.postRegister);

module.exports = router;