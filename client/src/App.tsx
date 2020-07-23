import { hot } from "react-hot-loader/root"
import React, { FC } from "react"
import { BrowserRouter } from 'react-router-dom'
import Router from 'config/Router'
import './styles/tailwind_output.css'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default hot(
  App
)
