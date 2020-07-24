const Meal = require('../../models/meal')
const { transformMeal } = require('./utils');

module.exports = {
  meals: async () => {
    try {
      const meals = await Meal.find()
      return meals.map(meal => {
        return transformMeal(meal)
      })
    } catch (err) {
      throw err
    }
  },
  createMeal: async (args) => {
    const meal = new Meal({
      name: args.mealInput.name,
      weighedProducts: args.mealInput.weighedProducts
    })

    let createdMeal;

    try {
      const result = await meal.save()
      createdMeal = transformMeal(result)

      return createdMeal
    } catch (err) {
      throw err
    }
  }
}