import React from 'react'
import { useRef } from 'react'
import {
  ColorChangeHandler,
  CustomPicker,
  InjectedColorProps,
} from 'react-color'
import { Alpha } from 'react-color/lib/components/common'

// interface Props {
//   onChange: ColorChangeHandler
// }

const CustomColorPicker: React.FC<InjectedColorProps> = (props) => {
  const { hex, hsl, onChange, rgb } = props
  return (
    <div className="h-4 w-full">
      <div className="relative h-full w-full">
        <input
          type="range"
          id="pointer1"
          className="absolute  rounded-full bg-gray-300"
        />
      </div>
    </div>
  )
}

export default CustomPicker(CustomColorPicker)
