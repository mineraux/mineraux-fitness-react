const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  weighedProducts: {
    type: [{
      weight: Number,
      product: {
        type: Schema.Types.ObjectId,
        ref:'Product'
      }
    }],
    required: true
},
})

module.exports = mongoose.model('Meal', mealSchema)
