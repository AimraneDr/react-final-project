const mongoose = require('mongoose')

// Group svhema and model
const groupSchema = new mongoose.Schema({
    branchID: { type: Number, required: true },
    name: { type: String, required: true },
    numStagaires: { type: Number, required: false },
    totalHours: { type: Number, default: 0 },
    hoursPerWeek: { type: Number, default: 0 },
    finishedModules: [{
      moduleID: { type: String, required: true },
      trainerID: { type: Number, default: 0 },
    }],
    currentModules: [{
      moduleID: { type: String, required: true },
      trainerID: { type: Number, default: 0 },
    }],
    stagaireIDs: [{ type: Number, required: true }],
  });
  
  const Group = mongoose.model('groups', groupSchema);

module.exports = Group