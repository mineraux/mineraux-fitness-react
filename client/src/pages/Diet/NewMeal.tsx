import Button from 'components/commons/Button'
import Input, { InputType } from 'components/commons/Input'
import { useCreateNewMealMutation, useProductListQuery } from 'graphql/components'
import React, { FunctionComponent, useState } from 'react'
import { useInput } from 'utils/hooks'
import Select from 'components/commons/Select'

type ProductListProps = {
  productValue: string,
  onChange: any
  id: number
}

type selectedProduct = {
  id: string,
  name: string
}

// TODO: Ajouter un retour visuel si le repas à bien été créé
// TODO: Ajouter un moyen de retirer un ingrédient ((-) à côté de chaque item ?)

const ProductList: FunctionComponent<ProductListProps> = ({productValue, onChange, id}) => {
  const { text } = InputType
  const {data, error, loading} = useProductListQuery()

  const [selectedProduct, setSelectedProduct] = useState<selectedProduct>({
    id:'',
    name:''
  })

  const handleChange = (event: any) => {
    const text = event.target.value as string;
    onChange(id, selectedProduct, text);
  };

  const onProductChange = (event: React.SyntheticEvent<HTMLSelectElement, Event>) => {
    //TODO: Fix modification des select ne met pas à jour le state
    setSelectedProduct({
      id: event.currentTarget.selectedOptions[0].id,
      name: event.currentTarget.value
    })
  }

  if (data && data.products) {
    return (
      <div className="mb-2 flex items-end">
        <div className="relative mb-2 flex-grow mr-3">
          <Select options={data.products.slice()} onChange={onProductChange} />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

        <div className="flex-grow">
          <label className="block text-gray-700 text-sm mb-1">Poids</label>
          <Input type={text} name="test" placeholder="300" className="mb-2" onChange={handleChange} {...productValue} />
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="relative mb-2">
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
  const { text } = InputType
  const {value: mealName, bind:bindMealName, reset:resetMealName} = useInput('')
  const [createNewMeal] = useCreateNewMealMutation()

  // TODO: Refacto dans un hook custom
  const [productList, setProductList] = useState([`productList0`])
  const [productsValues, setProductsValues] = useState({});
  const handleFieldChange = (fieldId:number, product:selectedProduct, weight:string) => {
    setProductsValues({ ...productsValues, [fieldId]: {
      product,
      weight
    } });
  };

  const onClickAddProduct = (e:any) => {
    e.preventDefault()
    addProductList()
  }

  const addProductList = () => {
    const productNameInState = `productList${productList.length}`
    productList.length === 0 ? setProductList([productNameInState]) : setProductList(productList.concat([productNameInState]))
  }

  const onClickSaveMeal = async (e:any) => {
    e.preventDefault()

    const formatedWeighedProducts = Object.keys(productsValues).map(key => {
      return {
        weight: parseInt(productsValues[key].weight),
        product: productsValues[key].product.id
      }
    })

    await createNewMeal({
      variables: {
        name:mealName,
        weighedProducts:formatedWeighedProducts
      }
    }).then(() => {
      resetMealName()
    })
  }

  const productListDOM = productList.map((field, index) => <ProductList key={field} id={index} onChange={handleFieldChange} productValue={productsValues[field]} />)

  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-2xl text-teal-600 mb-6">Nouveau repas</h1>
      <div className="w-full max-w-xl">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-gray-700 text-sm mb-1">Nom</label>
            <Input type={text} name="meal-name" placeholder="Midnight low carbs meal" className="mb-2" {...bindMealName} />
            {productListDOM}
          <div className="flex items-center justify-between mb-6">
            <Button label="Ajouter un produit" onClick={onClickAddProduct} />
          </div>

          <div className="flex items-center justify-between">
            <Button label="Sauvegarder mon repas" onClick={onClickSaveMeal}/ >
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewMeal