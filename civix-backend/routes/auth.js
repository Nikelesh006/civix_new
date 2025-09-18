const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authmiddleware');

router.post('/register', authController.signup); // <-- Note endpoint: '/register'
router.post('/login', authController.login);

module.exports = router;

