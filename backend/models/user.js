const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Define the user schema
const userSchema = mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

}, { timestamps: true });

// Pre-save hook to hash the password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


// Create a model for the user
const User = mongoose.model('User', userSchema);

module.exports = User;
