const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

// Create express app
const app = express();

// middleware
app.use(express.json());

//routes
app.use('/api/users', require('./routes/userRoutes'));

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
})

