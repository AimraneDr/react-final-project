const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const groupRoutes = require('./routes/group.routes');
const branchRoutes = require('./routes/branch.routes');
const moduleRoutes = require('./routes/module.routes');
const trainerRoutes = require('./routes/trainer.routes');
const traineeRoutes = require('./routes/trainee.routes');


const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/ReactFinalProject', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors())
app.use(bodyParser.json());

//use routes
app.use('/', groupRoutes);
app.use('/', branchRoutes);
app.use('/', moduleRoutes);
app.use('/', trainerRoutes);
app.use('/', traineeRoutes);



// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
