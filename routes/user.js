const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.get('/login', controller.login);
router.get('/signup', controller.signup);

module.exports = router;