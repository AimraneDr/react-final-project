const express = require('express');
const Trainer = require('../models/trainer.model');

const router = express.Router();

// Create a new trainer
router.post('/trainers/create', async (req, res) => {
  try {
    const trainer = new Trainer(req.body);
    await trainer.save();
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ error: 'Error creating group' });
  }
});

// Get all groups
router.get('/trainers', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching groups' });
  }
});

// Update a trainer by ID
router.put('/trainers/:id', async (req, res) => {
  const trainerID = req.params.id;
  try {
    const trainer = await Trainer.findOneAndUpdate({id : trainerID}, req.body, { new: true });
    if (!trainer) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ error: 'Error updating group' });
  }
});

// Delete a trainer by ID
router.delete('/trainers/:id', async (req, res) => {
  const trainerID = req.params.id;
  try {
    const trainer = await Trainer.findOneAndRemove({id : trainerID});
    if (!trainer) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.json({ message: 'Group deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting group' });
  }
});

// Delete all trainers
router.delete('/trainers/all', async (req, res) => {
  try {
    await Trainer.deleteMany({});
    res.json({ message: 'All groups deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting all groups' });
  }
});

module.exports = router;
