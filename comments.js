// Create web server 

// 1. Import Express
const express = require('express');
const app = express();

// 2. Import Mongoose
const mongoose = require('mongoose');

// 3. Import CORS
const cors = require('cors');

// 4. Import Body Parser
const bodyParser = require('body-parser');

// 5. Import DotEnv
require('dotenv').config();

// 6. Import Routes
const comments = require('./routes/comments');

// 7. Run Middleware
// 7.1 CORS
app.use(cors());

// 7.2 Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 7.3 Routes
app.use('/api/comments', comments);

// 8. Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// 9. Run Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});