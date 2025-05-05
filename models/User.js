const mongoose = require('mongoose');

// Blueprint for user accounts.
const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profilePic: {type: String}, //optional
    bio: {type: String} // optional
}, {timestamps: true}); // adds createdAt and updatedAt fields

console.log('Saving this new User...');

// Create a model
const User = mongoose.model('User', userSchema);

const test = new User({
    username: 'test',
    email: 'test@gmail.com',
    password: '1234'
});

test.save().then(()=> console.log('New user account is created.')).catch((err) => console.error('Error: ', err));