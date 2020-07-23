import React, { FunctionComponent } from 'react'
import Classnames from 'classnames'

type ButtonProps = {
  label: string
  className?: string
}

const Button: FunctionComponent<ButtonProps> = ({label, className}) => {
  return (
    <button className={Classnames(className, 'bg-white hover:bg-gray-100 text-gray-800 text-sm py-2 px-4 border border-gray-400 rounded shadow')}>
      {label}
    </button>
  )
}

export default Button