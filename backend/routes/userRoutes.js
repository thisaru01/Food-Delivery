const express = require('express');
const router = express.Router();

const { registerUser, getUsers, loginUser } = require('../controllers/userController');

// Route to register a new user
router.post('/', registerUser);

// Route to login a user
router.post('/login', loginUser);

// Route to get all users
router.get('/', getUsers);


module.exports = router;