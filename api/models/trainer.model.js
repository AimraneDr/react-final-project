const mongoose = require("mongoose");

// Trainer schema and model
const trainerSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    birthdate: { type: Date, required: false },
    age: { type: Number, required: false },
    gender: { type: String, enum: ['male', 'female'], required: false },
    title: { type: String, required: false },
  });
  
  const Trainer = mongoose.model('Trainers', trainerSchema);

module.exports = Trainer