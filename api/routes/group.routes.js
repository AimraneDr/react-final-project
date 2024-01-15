const express = require('express');
const Group = require('../models/group.model');

const router = express.Router();

// Create a new group
router.post('/groups/create', async (req, res) => {
  try {
    const group = new Group(req.body);
    await group.save();
    res.json(group);
  } catch (error) {
    res.status(500).json({ error: 'Error creating group' });
  }
});

// Get all groups
router.get('/groups', async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching groups' });
  }
});

// Get a group by ID
router.get('/groups/:id', async (req, res) => {
    const groupId = req.params.id;
    try {
      const group = await Group.find({id : groupId});
      if (!group) {
        return res.status(404).json({ error: 'Group not found' });
      }
      res.json(group);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching group' });
    }
});

// Update a group by ID
router.put('/groups/:id', async (req, res) => {
    const groupId = req.params.id;
    try {
      const group = await Group.findOneAndUpdate({id : groupId}, req.body, { new: true });
      if (!group) {
        return res.status(404).json({ error: 'Group not found' });
      }
      res.json(group);
    } catch (error) {
      res.status(500).json({ error: 'Error updating group' });
    }
});

// Delete a group by ID
router.delete('/groups/:id', async (req, res) => {
    const groupId = req.params.id;
    try {
      const group = await Group.findOneAndRemove({id : groupId});
      if (!group) {
        return res.status(404).json({ error: 'Group not found' });
      }
      res.json({ message: 'Group deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting group' });
    }
});

// Delete all groups
router.delete('/groups/all', async (req, res) => {
    try {
      await Group.deleteMany({});
      res.json({ message: 'All groups deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting all groups' });
    }
});


module.exports = router;
