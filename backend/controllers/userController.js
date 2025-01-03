const User = require('../models/user');

// Register a new user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body; // Extract user data from request body

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const user = await User.create({ name, email, password });
        res.status(201).json(user); // Send the new user as response

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerUser, getUsers };
