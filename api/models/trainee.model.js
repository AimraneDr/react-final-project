const mongoose = require("mongoose");

// Trainee schema and model
const traineeSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    birthdate: { type: Date, required: false },
    age: { type: Number, required: false },
    gender: { type: String, enum: ['male', 'female'], required: true },
    group: { type: String, required: false },
    num: { type: Number, required: false },
    average: { type: Number, required: false },
  });
  
  const Trainee = mongoose.model('Trainees', traineeSchema);

module.exports = Trainee