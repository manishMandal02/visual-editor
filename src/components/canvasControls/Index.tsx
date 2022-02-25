import React from 'react'
import Shapes from './Shapes'

const CanvasControls = () => {
  return (
    <div className="flex h-full bg-primary-dark2 ">
      {/* left menu */}
      <div className="h-full w-1/5 bg-slate-700"></div>
      {/* right options */}
      <div className="h-full w-4/5">
        <Shapes />
      </div>
    </div>
  )
}

export default CanvasControls
