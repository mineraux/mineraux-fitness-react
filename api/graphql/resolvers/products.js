const Product = require('../../models/product')
const { transformProduct, caloriesNutritivesWeight } = require('./utils');

const computedCalories = (nutritives) => {
  const protein = nutritives.find(item => {
    return item.nutritive === "protein"
  })

  const carbs = nutritives.find(item => {
    return item.nutritive === "carbs"
  })

  const lipid = nutritives.find(item => {
    return item.nutritive === "lipid"
  })

  return (protein.weight * caloriesNutritivesWeight.protein) + (carbs.weight * caloriesNutritivesWeight.carbs) + (lipid.weight * caloriesNutritivesWeight.lipid)

}

module.exports = {
  products: async () => {
    try {
      const products = await Product.find()
      return products.map(product => {
        return transformProduct(product)
      })
    } catch (err) {
      throw err
    }
  },
  createProduct: async (args) => {
    const product = new Product({
      name: args.productInput.name,
      nutritives: args.productInput.nutritives,
      calories: args.productInput.calories ? args.productInput.calories : computedCalories(args.productInput.nutritives)
    })

    let createdProduct;

    try {
      const result = await product.save()
      createdProduct = transformProduct(result)

      return createdProduct
    } catch (err) {
      throw err
    }
  }
}