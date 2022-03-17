import React from 'react'
// import CustomColorPicker from './CustomColorPicker'

interface Props {
  selected: string
  onChange: (color: string) => void
}

const ColorPicker: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <div className="relative flex items-center justify-center  rounded-md   py-1  px-2.5 shadow-sm shadow-slate-700  ">
      <div
        className=" absolute  h-8 w-11 cursor-pointer rounded  border border-slate-500  py-1.5  px-2.5 "
        style={{ backgroundColor: selected }}
      ></div>
      <input
        type="color"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 cursor-pointer appearance-none rounded-md border-none bg-inherit p-0 opacity-0 outline-none ring-black"
      />
    </div>
  )
}

export default ColorPicker
