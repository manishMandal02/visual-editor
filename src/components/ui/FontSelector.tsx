import React from 'react'

import { FiChevronDown } from 'react-icons/fi'

interface Props {
  selected: string
  onChange: (font: string) => void
}

const FontSelector: React.FC<Props> = ({ selected, onChange }) => {
  console.log(selected)
  return (
    <div className="relative w-full  cursor-pointer">
      {/* TODO: Font Selector */}
      <select
        value={selected}
        defaultValue={'Poppins'}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full cursor-pointer appearance-none rounded-sm border-gray-200  bg-gray-50 py-1.5 
        px-1.5 pr-8 leading-tight text-black focus:outline-none "
      >
        <option className="rounded-none p-1" value={'Poppins'}>
          Poppins
        </option>
      </select>
      <FiChevronDown className="absolute right-2 top-2 scale-125 text-black" />
    </div>
  )
}

export default FontSelector
