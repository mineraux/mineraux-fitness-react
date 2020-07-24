const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  nutritives: {
    type: [{
      nutritive: String,
      weight: Number
    }],
    required: true
  },
  calories: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('Product', productSchema)
