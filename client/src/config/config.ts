import NewMeal from 'pages/Diet/NewMeal'
import NewProduct from 'pages/Diet/NewProduct'
import MyDiet from 'pages/MyDiet'
import MyProgram from 'pages/MyProgram'
import { FunctionComponent } from 'react'
import Home from '../pages/Home'

interface routeInterface {
  path: string
  name: string
  component: FunctionComponent
  inHeader: boolean
}

interface routesInterface {
  [k: string]: routeInterface
}

interface configInterface {
  routes: routesInterface
}

const config: configInterface = {
  routes: {
    Home: {
      path: '/',
      name: 'Home',
      component: Home,
      inHeader: true
    },
    MyDiet: {
      path: '/my-diet',
      name: 'Ma diète',
      component: MyDiet,
      inHeader: true
    },
    NewProduct: {
      path: '/my-diet/new-product',
      name: 'Nouveau produit',
      component: NewProduct,
      inHeader: false
    },
    NewMeal: {
      path: '/my-diet/new-meal',
      name: 'Nouveau repas',
      component: NewMeal,
      inHeader: false
    },
    MyProgram: {
      path: '/my-program',
      name: 'Mon programme',
      component: MyProgram,
      inHeader: true
    },
  },
}

export default config