const productsResolver = require('./products')
const mealsResolver = require('./meals')
const datedMealsResolver = require('./datedMeals')

const RootResolver = {
  ...productsResolver,
  ...mealsResolver,
  ...datedMealsResolver
}

/**
 * 020-07-28T12:53:54.409Z
 * 5f1b501d66ca9791a04dde82
 */

module.exports = RootResolver