const mongoose = require('../config/database')
const { Schema } = mongoose

const evaluationSchema = new Schema({
  date: { type: Date, default: Date.now },
  color: { type: String, default: 'green', required: true },
});

module.exports = mongoose.model('evaluations', evaluationSchema)
