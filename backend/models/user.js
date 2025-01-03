const mongoose = require('mongoose');

// Define the user schema
const userSchema = mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

}, { timestamps: true });

// Create a model for the user
const User = mongoose.model('User', userSchema);

module.exports = User;
