const express = require('express');
const router = express.Router();

const { registerUser, getUsers } = require('../controllers/userController');

// Route to register a new user
router.post('/', registerUser);

// Route to get all users
router.get('/', getUsers);


module.exports = router;