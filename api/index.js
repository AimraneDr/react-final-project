const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
mongoose.connect('localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
