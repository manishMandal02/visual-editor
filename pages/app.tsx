import dynamic from 'next/dynamic'
import React, { useState } from 'react'
// import CanvasArea from '../src/components/canvasArea/Index'
import CanvasControls from '../src/components/canvasControls/Index'
import Header from '../src/components/header/Index'
import { useAppStore } from '../src/store/index'
import downloadToImage from '../src/utils/downloadToImage'

const CanvasArea = dynamic(() => import('../src/components/canvasArea/Index'), {
  ssr: false,
})

const App = () => {
  // Global state
  const setSelectedElNull = useAppStore((state) => state.setSelectedElNull)
  const setHoveredElNull = useAppStore((state) => state.setHoveredElNull)

  const projectSetting = useAppStore((state) => state.setting)

  return (
    <div className="h-screen bg-primary-dark2">
      <div className="flex  h-1/12  items-center justify-center border-b-2 border-primary bg-primary-dark text-gray-100">
        <Header />
      </div>
      <div
        onClick={() => {
          setHoveredElNull()
          setSelectedElNull()
        }}
        className="relative flex h-11/12 items-start justify-center"
      >
        <div className="absolute left-0 h-full w-96 ">
          <CanvasControls />
        </div>
        <div
          className=" mt-12 ml-60 flex h-full overflow-hidden bg-slate-300"
          style={{
            width: projectSetting.size.width,
            height: projectSetting.size.height,
          }}
        >
          <CanvasArea boardSetting={projectSetting} />
        </div>
      </div>
    </div>
  )
}

export default App
