import Button from 'components/commons/Button'
import Input, { InputType } from 'components/commons/Input'
import { NutritiveEnum, useCreateNewProductMutation } from 'graphql/components'
import React, { FormEvent, FunctionComponent } from 'react'
import { useInput } from 'utils/hooks'

const NewProduct: FunctionComponent = () => {
  const { text } = InputType

  const {value: productName, bind:bindProductName, reset:resetProductName} = useInput('')
  const {value: protein, bind:bindProtein, reset:resetProtein} = useInput('')
  const {value: carbs, bind:bindCarbs, reset:resetCarbs} = useInput('')
  const {value: lipid, bind:bindLipid, reset:resetLipid} = useInput('')
  const {value: calories, bind:bindCalories, reset:resetCalories} = useInput('')

  const [createNewProduct] = useCreateNewProductMutation()

  const onSubmitNewProductForm = async (e: FormEvent) => {
    e.preventDefault()

    // TODO: Input validation before submit form

    await createNewProduct({
      variables:{
        name: productName,
        calories:calories ? parseInt(calories) : null,
        nutritives:[
          {
            nutritive: NutritiveEnum.Protein,
            weight: parseInt(protein)
          },
          {
            nutritive: NutritiveEnum.Carbs,
            weight: parseInt(carbs)
          },
          {
            nutritive: NutritiveEnum.Lipid,
            weight: parseInt(lipid)
          }
        ]
      }
    })
    .then(result => {
      // TODO: Display product has been successfully created
      // TODO: Display loading while creation is processing
      console.log(result)
    })
    .catch(err => {
      // TODO: Display product creation failed
      console.log(err)
    })


    resetProductName()
    resetProtein()
    resetCarbs()
    resetLipid()
    resetCalories()
  }

  return (

    <div className="container mx-auto px-4 my-10">
      <h1 className="text-2xl text-teal-600 mb-6">Nouvel ingrédient</h1>

      <div className="w-full max-w-xl">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmitNewProductForm}>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nom*</label>
            <Input type={text} placeholder="Oeuf" name={"name"} {...bindProductName} />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="macro">Macronutriments*</label>
            <div className="pl-2">
              <label className="block text-gray-700 text-sm mb-1">{NutritiveEnum.Protein}</label>
              <Input type={text} name={NutritiveEnum.Protein} placeholder="300" className="mb-2" {...bindProtein} />

              <label className="block text-gray-700 text-sm mb-1">{NutritiveEnum.Carbs}</label>
              <Input type={text} name={NutritiveEnum.Carbs} placeholder="300" className="mb-2" {...bindCarbs} />

              <label className="block text-gray-700 text-sm mb-1">{NutritiveEnum.Lipid}</label>
              <Input type={text} name={NutritiveEnum.Lipid} placeholder="300" className="mb-2" {...bindLipid} />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Calories</label>
            <Input type={text} name="calories" placeholder="300" {...bindCalories} />
            <p className="text-gray-600 text-xs italic">Les calories sont automatiquement calculées si tu ne spécifies rien ici</p>
          </div>

          <div className="flex items-center justify-between">
            <Button label="Sauvegarder mon ingédient" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewProduct