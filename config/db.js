// Mongoose is a node.js library to interact with mongoDB in the backend.
const mongoose = require('mongoose');
// MongoDB Atlas connection string.
const uri = 'mongodb+srv://mochilie89:SFx8qfSBPOXRqurV@mini-cluster.1itsbux.mongodb.net/?retryWrites=true&w=majority&appName=Mini-Cluster';

// Async dabatase connection method.
const connectDB = async () =>{
    try {
        // Connect to MongoDB using mongoose.
        await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
    } catch(err){
        console.error('MongoDB connection error: ', err.message);
        process.exit(1); // Exit on failure
    }
};

module.exports = connectDB;