const productsResolver = require('./products')
const mealsResolver = require('./meals')

const RootResolver = {
  ...productsResolver,
  ...mealsResolver,
}

module.exports = RootResolver