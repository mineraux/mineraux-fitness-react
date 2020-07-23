const productsResolver = require('./products')

const RootResolver = {
  ...productsResolver,
}

module.exports = RootResolver