import { nanoid } from 'nanoid'
import React from 'react'
import { useCircleStore } from '../../store/canvasShapes'

const Shapes = () => {
  const addCircle = useCircleStore((state) => state.add)

  const addCircleHandler = () => {
    addCircle({
      x: 100,
      y: 100,
      radius: 50,
      id: nanoid(),
    })
  }
  return (
    <div className="flex h-full w-full justify-center p-4">
      {/* box */}
      <div className="h-16 w-20 cursor-pointer rounded-md bg-slate-600 p-2 shadow-sm shadow-slate-600">
        <div className=" h-full w-full rounded-sm border-3 border-primary"></div>
      </div>
      {/* circle */}
      <div
        onClick={addCircleHandler}
        className="ml-6 flex h-16 w-20 cursor-pointer items-center justify-center rounded-md bg-slate-600 p-2 shadow-sm shadow-slate-600"
      >
        <div className=" h-12 w-12 rounded-full border-3 border-primary"></div>
      </div>
      {/* circle */}
      <div className="ml-6 flex h-16 w-20 cursor-pointer items-center justify-center rounded-md bg-slate-600 p-2 shadow-sm shadow-slate-600">
        <div className=" flex h-full w-full items-center justify-center text-4xl">
          ⭐
        </div>
      </div>
    </div>
  )
}

export default Shapes
