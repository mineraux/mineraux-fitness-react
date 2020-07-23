import Button from 'components/commons/Button'
import React, { FunctionComponent } from 'react'

const MyDiet: FunctionComponent = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-2xl text-teal-600">My Diet page component</h1>
      <Button className="my-2" label="Ajouter un produit" />
    </div>
  )
}

export default MyDiet