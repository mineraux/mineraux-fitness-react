const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  nutritives: [{
    nutritive: String,
    weight: Number
  }],
  calories: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('Product', productSchema)
