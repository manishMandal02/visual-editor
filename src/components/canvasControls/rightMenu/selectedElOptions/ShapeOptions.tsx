import React from 'react'
import { element } from '../../../../types/canvas.type'

interface Props {
  selectedEl: element | null
}

const ShapeOptions: React.FC<Props> = ({ selectedEl }) => {
  return (
    <div className="p-5 text-gray-100">
      <div>
        <p className="mb-1 ml-2 tracking-wide">Fill</p>
        <div className=" rounded-md border border-slate-600 p-2">
          <div className="flex items-center justify-between p-1">
            <p>Color</p>
            <input type="color" value={'#0EA5E9'} className="appearance-none" />
          </div>
          <div className="mt-2 flex items-center justify-between p-1">
            <p>Opacity</p>
            <input type="range" value={100} />
          </div>
        </div>
      </div>
      <p className="mb-1 ml-2 mt-6 tracking-wide">Border</p>
      <div className=" rounded-md border border-slate-600 p-2">
        <div className="flex items-center justify-between p-1">
          <p>Color</p>
          <input type="color" value={'#0EA5E9'} className="appearance-none" />
        </div>
        <div className="mt-2 flex items-center justify-between p-1">
          <p>Opacity</p>
          <input type="range" value={100} />
        </div>
      </div>
    </div>
  )
}

export default ShapeOptions
