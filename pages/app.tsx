import React from 'react'
import CanvasArea from '../src/components/canvasArea/Index'
import CanvasControls from '../src/components/canvasControls/Index'

const App = () => {
  return (
    <div className="min-h-screen bg-primary-dark">
      <div className=" flex h-16 items-center justify-center border-b border-primary text-gray-100">
        {/* TODO: Header */}
        Header
      </div>
      <div className="relative flex h-screen items-start justify-center">
        <div className="absolute  left-0 h-4/5 w-96 ">
          <CanvasControls />
        </div>
        <div className="mt-20 ml-20 flex h-96 w-96 overflow-hidden">
          <CanvasArea />
        </div>
      </div>
    </div>
  )
}

export default App
