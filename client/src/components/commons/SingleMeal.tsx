import React, { FunctionComponent } from 'react';
import { Meal, useSingleMealQuery } from 'graphql/components';

type SingleMealProps = {
  meal: any
}

const SingleMeal: FunctionComponent<SingleMealProps> = ({meal}) => {

  console.log(meal)

  const { data, loading, error } = useSingleMealQuery({variables:{mealId: meal.meal}})

  if (data?.singleMeal) {
    return (
      <div>
        <p>id : {data.singleMeal._id}</p>
        <p>name : {data.singleMeal.name}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <span>Loading ...</span>
    )
  }

  if (error) {
    return (
      <p>{error}</p>
    )
  }

  return null
}

export default SingleMeal