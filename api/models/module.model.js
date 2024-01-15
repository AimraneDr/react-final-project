const mongoose = require("mongoose");

// Model schema and model
const moduleSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, default: '' },
    totalHours: { type: Number, required: true },
    nature: { type: String, enum: ['local', 'regeaux'], required: true },
  });
  
const Module = mongoose.model('Modules', moduleSchema);

module.exports = Module