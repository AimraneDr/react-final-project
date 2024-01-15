const express = require('express');
const Module = require('../models/module.model');

const router = express.Router();

// Create a new module
router.post('/modules/create', async (req, res) => {
  try {
    const module = new Module(req.body);
    await module.save();
    res.json(module);
  } catch (error) {
    res.status(500).json({ error: 'Error creating group' });
  }
});

// Get all modules
router.get('/modules', async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching groups' });
  }
});


// Update a module by ID
router.put('/modules/:id', async (req, res) => {
  const moduleID = req.params.id;
  try {
    const module = await Module.findOneAndUpdate({id : moduleID}, req.body, { new: true });
    if (!module) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.json(module);
  } catch (error) {
    res.status(500).json({ error: 'Error updating group' });
  }
});

// Delete a module by ID
router.delete('/modules/:id', async (req, res) => {
  const moduleID = req.params.id;
  try {
    const module = await Module.findOneAndRemove({id : moduleID});
    if (!module) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.json({ message: 'Group deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting group' });
  }
});

// Delete all modules
router.delete('/modules/all', async (req, res) => {
  try {
    await Module.deleteMany({});
    res.json({ message: 'All groups deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting all groups' });
  }
});


module.exports = router;
