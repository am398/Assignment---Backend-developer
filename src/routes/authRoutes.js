const express = require('express');
const {
  registerUser,
  verifyUser,
  loginUser
} = require('../controllers/authController');
const { validateRegisterData, validateOTP } = require('../middlewares/validators');

const router = express.Router();

router.post('/register', validateRegisterData, registerUser);
router.post('/verify', validateOTP, verifyUser);
router.post('/login', loginUser);

module.exports = router;