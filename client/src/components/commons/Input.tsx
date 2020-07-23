
import React, { FunctionComponent } from 'react'
import Classnames from 'classnames'

export enum InputType {
  text = "text",
  password = "password"
}

type InputProps = {
  type: InputType
  name?: string
  placeholder?: string
  className?: string
  onChange: any
}

const Input: FunctionComponent<InputProps> = ({type, name, placeholder, className, onChange}) => {
  return (
    <input
      type={type.toString()}
      name={name}
      placeholder={placeholder}
      className={Classnames(className, 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline')}
      onChange={onChange}
      />
  )
}

export default Input

