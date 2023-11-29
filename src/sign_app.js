const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const port = 5000;


const statis_path = path.join(__dirname,"../templates/views/signin.hbs");
app.use(express.static(statis_path));
app.set("view engine","hbs")

// MongoDB schema
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  birthdate: Date,
  gender: String,
  age: Number,
  height: Number,
  weight: Number,
});

const User = mongoose.model('User', userSchema);

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());


// Handle POST request at the '/postData' endpoint
app.post('/postData', (req, res) => {
    const receivedData = req.body.data;
    console.log('Received data:', receivedData);

    // Process the data as needed

    // Send a response back to the client
    res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


