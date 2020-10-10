const DatedMeal = require('../../models/datedMeal')
const { transformDatedMeal } = require('./utils');

module.exports = {
  datedMeals: async () => {
    try {
      const datedMeals = await DatedMeal.find()
      return datedMeals.map(datedMeal => {
        return transformDatedMeal(datedMeal)
      })
    } catch (err) {
      throw err
    }
  },
  createDatedMeal: async (args) => {
    const datedMeal = new DatedMeal({
      timestamp: args.datedMealInput.timestamp,
      meal: args.datedMealInput.meal
    })

    let createdDatedMeal;

    try {
      const result = await datedMeal.save()
      createdDatedMeal = transformDatedMeal(result)

      return createdDatedMeal
    } catch (err) {
      throw err
    }
  }
}