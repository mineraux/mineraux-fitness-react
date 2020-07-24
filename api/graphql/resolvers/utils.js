const DataLoader = require('dataloader')
const Product = require('../../models/product')
const Meal = require('../../models/product')

// Product
const productLoader = new DataLoader(productIds => {
  return products(productIds)
})

const products = async productIds => {
  try {
    const products = await Product.find({ _id: { $in: productIds }});

    products.sort((a, b) => {
      return (
        productIds.indexOf(a._id.toString()) - productIds.indexOf(b._id.toString())
      );
    });

    return products.map(product => {
      return transformProduct(product)
    })
  } catch (err) {
    throw err
  }
}

const product = async ProductId => {
  try {
    const product = await ProductLoader.load(ProductId.toString())
    return product
  } catch (err) {
    throw err
  }
}

const transformProduct = product => {
  return {
    ...product._doc,
    _id: product.id,
    name: product.name,
    nutritives: product.nutritives,
    calories: product.calories
  }
}

const caloriesNutritivesWeight = {
  "protein" : 4,
  "carbs" : 4,
  "lipid" : 9
}

// Meal
const transformMeal = meal => {
  return {
    ...meal._doc,
    _id: meal.id,
    name: meal.name,
    weighedProducts: meal.weighedProducts,
  }
}

exports.transformProduct = transformProduct
exports.transformMeal = transformMeal
exports.caloriesNutritivesWeight = caloriesNutritivesWeight