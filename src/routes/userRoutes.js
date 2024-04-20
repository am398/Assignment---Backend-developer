const express = require('express');
const { validateUserData } = require('../middlewares/validators');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { getUserDetails,addDetails } = require('../controllers/userController');

const router = express.Router();

router.get('/profile', authenticateToken, getUserDetails);
router.post('/profile', authenticateToken, validateUserData, addDetails);


module.exports = router;