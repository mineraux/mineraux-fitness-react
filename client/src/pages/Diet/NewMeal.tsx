import Button from 'components/commons/Button'
import { useProductListQuery } from 'graphql/components'
import React, { FunctionComponent, Suspense } from 'react'

const ProductList: FunctionComponent = () => {
  const {data, error, loading} = useProductListQuery()

  if (data) {
    return (
      <div className="relative mb-6">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="productList">
          {data.products?.map(product => <option key={product._id}>{product.name}</option>)}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="relative mb-6">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="productList">
          <option>Loading your ingredients</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative mb-6">
        Something went wrong getting your ingredients
      </div>
    )
  }

  return null
}

const NewMeal: FunctionComponent = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-2xl text-teal-600 mb-6">Nouveau repas</h1>

      <div className="w-full max-w-xl">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <ProductList />
          <div className="flex items-center justify-between">
            <Button label="Sauvegarder mon repas" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewMeal