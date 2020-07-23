import MyDiet from 'pages/MyDiet'
import MyProgram from 'pages/MyProgram'
import { FunctionComponent } from 'react'
import Home from '../pages/Home'

interface routeInterface {
  path: string
  name: string
  component: FunctionComponent
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
    },
    MyDiet: {
      path: '/my-diet',
      name: 'Ma diète',
      component: MyDiet,
    },
    MyProgram: {
      path: '/my-program',
      name: 'Mon programme',
      component: MyProgram,
    },
  },
}

export default config