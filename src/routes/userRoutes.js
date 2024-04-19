const express = require('express');
const { getUserDetails } = require('../controllers/userController');

const router = express.Router();

router.get('/profile', getUserDetails);

module.exports = router;