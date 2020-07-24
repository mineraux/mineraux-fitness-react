import { Product } from 'graphql/components';
import React, { FunctionComponent } from 'react';

type SelectProps = {
  options: Product[]
  onChange: (event: React.SyntheticEvent<HTMLSelectElement, Event>) => void
}

// TODO: Handle any type passed
const Select: FunctionComponent<SelectProps> = ({options, onChange}) => {
  return (
      <select
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          onChange={onChange}
        >
        {options.map(option => <option key={option._id} id={option._id}>{option.name}</option>)}
      </select>
  )
}

export default Select