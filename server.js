const express = require('express');
const jwt = require('jsonwebtoken');
const auth = require('./auth'); // Importing the authentication logic
require('dotenv').config(); // If using .env file for JWT_SECRET

const app = express();
app.use(express.json());

// Public route
app.get('/', (req, res) => {
  res.send('Welcome to the public API!');
});

// Login route
app.post('/login', (req, res) => {
  // Here, you would normally validate the user credentials
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.JWT_SECRET);
  res.json({ accessToken });
});

// Protected route
app.get('/protected', auth.authenticateToken, (req, res) => {
  res.json({ message: "Protected content" });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
