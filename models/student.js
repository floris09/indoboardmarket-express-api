const mongoose = require('../config/database')
const { Schema } = mongoose

const studentSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  batch_id: { type: Schema.Types.ObjectId, ref: 'batches' }
});

module.exports = mongoose.model('students', studentSchema)
