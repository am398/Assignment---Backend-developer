const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { getUserDetails } = require('../controllers/userController');

const router = express.Router();

router.get('/profile', authenticateToken, getUserDetails);

module.exports = router;