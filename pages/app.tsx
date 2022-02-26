import dynamic from 'next/dynamic'
import React, { useState } from 'react'
// import CanvasArea from '../src/components/canvasArea/Index'
import CanvasControls from '../src/components/canvasControls/Index'
import Header from '../src/components/header/Index'
import { useProjectBoardStore } from '../src/store/projectBoard'
import downloadToImage from '../src/utils/downloadToImage'

const CanvasArea = dynamic(() => import('../src/components/canvasArea/Index'), {
  ssr: false,
})

const App = () => {
  // state - selected element TODO: update type below from any
  const setSelectedElNull = useProjectBoardStore(
    (state) => state.setSelectedElNull
  )

  const projectSetting = useProjectBoardStore((state) => state.setting)

  //export to image
  const exportToImageHandler = () => {
    // downloadToImage()
  }

  return (
    <div className="min-h-screen bg-primary-dark">
      <div className=" flex h-16 items-center justify-center border-b border-primary text-gray-100">
        <Header />
      </div>
      <div
        // onClick={setSelectedElNull}
        className="relative flex h-screen items-start justify-center"
      >
        <div className="absolute  left-0 h-4/5 w-96 ">
          <CanvasControls />
        </div>
        <div
          className=" mt-12 ml-60 flex  overflow-hidden bg-slate-300"
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
