const express = require('express');
const app = express();
// Method from db.js
const connectDB = require('./config/db');
// Common port for locally testing web dev servers like Express.
const port = 3000;

// Connection to MongoDB.
const { MongoClient, ServerApiVersion } = require('mongodb');
 
console.log("Connecting to MongoDB...");
// Connect to MongoDB.
connectDB();

// Register my models.
require('./models/User');


// First param is the path.
app.get('/', (req, res) => {
    res.send('Hello you\'re in the world');
});

// Listen.
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});




