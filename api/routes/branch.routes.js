const express = require('express');
const Branch = require('../models/branch.model');

const router = express.Router();

// Create a new branch
router.post('/branches/create', async (req, res) => {
  try {
    const branch = new Branch(req.body);
    const result = await branch.save();
    res.json(group);
  } catch (error) {
    res.status(500).json({ error: 'Error creating group' });
  }
});

// Get all branches
router.get('/branches', async (req, res) => {
  try {
    const branches = await Branch.find({});
    res.json(branches);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching groups' });
  }
});


// Update a branch by ID
router.put('/branches/:id', async (req, res) => {
  const branchID = req.params.id;
  try {
    const branch = await Branch.findOneAndUpdate({id : branchID}, req.body, { new: true });
    if (!branch) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.json(branch);
  } catch (error) {
    res.status(500).json({ error: 'Error updating group' });
  }
});

// Delete a branch by ID
router.delete('/branches/:id', async (req, res) => {
  const branchID = req.params.id;
  try {
    const branch = await Branch.findOneAndRemove({id : branchID});
    if (!branch) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.json({ message: 'Group deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting group' });
  }
});

// Delete all branches
router.delete('/branches/all', async (req, res) => {
  try {
    await Branch.deleteMany({});
    res.json({ message: 'All groups deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting all groups' });
  }
});


module.exports = router;
