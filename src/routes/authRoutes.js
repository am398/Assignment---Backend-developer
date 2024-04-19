const express = require('express');
const {
  registerUser,
  verifyUser,
  loginUser
} = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/verify', verifyUser);
router.post('/login', loginUser);

module.exports = router;