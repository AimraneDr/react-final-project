const express = require('express');
const Trainee = require('../models/trainee.model');

const router = express.Router();

// Create a new trainee
router.post('/trainees/create', async (req, res) => {
  try {
    const trainee = new Trainee(req.body);
    await trainee.save();
    res.json(trainee);
  } catch (error) {
    res.status(500).json({ error: 'Error creating group' });
  }
});

// Get all trainees
router.get('/trainees', async (req, res) => {
  try {
    const trainees = await Trainee.find();
    res.json(trainees);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching groups' });
  }
});

// Update a trainee by ID
router.put('/trainees/:id', async (req, res) => {
  const traineeID = req.params.id;
  try {
    const trainee = await Trainee.findOneAndUpdate({id : traineeID}, req.body, { new: true });
    if (!trainee) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.json(trainee);
  } catch (error) {
    res.status(500).json({ error: 'Error updating group' });
  }
});

// Delete a trainee by ID
router.delete('/trainees/:id', async (req, res) => {
  const traineeID = req.params.id;
  try {
    const trainee = await Trainee.findOneAndRemove({id : traineeID});
    if (!trainee) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.json({ message: 'Group deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting group' });
  }
});

// Delete all trainees
router.delete('/trainees/all', async (req, res) => {
  try {
    await Trainee.deleteMany({});
    res.json({ message: 'All groups deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting all groups' });
  }
});

module.exports = router;
