const mongoose = require("mongoose");

// Branch schema and model
const branchSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    numGroups: { type: Number, required: false },
    modules: [{ type: String, required: false }],
  });

const Branch = mongoose.model('branches', branchSchema);

module.exports = Branch