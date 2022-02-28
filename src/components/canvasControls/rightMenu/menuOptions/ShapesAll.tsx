import { nanoid } from 'nanoid'
import React from 'react'
import { CIRCLE, RECTANGLE } from '../../../../Constants'
import { useProjectBoardStore } from '../../../../store/projectBoard'
import { useCircleStore, useRectangleStore } from '../../../../store/shapes'

const Shapes = () => {
  //global state - selectEl
  const setSelectedEl = useProjectBoardStore((state) => state.setSelectedEl)

  // global state - add shapes
  const addCircle = useCircleStore((state) => state.add)
  const addRectangle = useRectangleStore((state) => state.add)

  const initialCircleAttr = {
    type: CIRCLE,
    x: 130,
    y: 250,
    radius: 50,
  }

  const initialRectAttr = {
    type: RECTANGLE,
    x: 130,
    y: 250,
    width: 100,
    height: 50,
  }

  const addCircleHandler = () => {
    const id = nanoid()
    addCircle({ id, ...initialCircleAttr })
    setSelectedEl({ id, ...initialCircleAttr })
  }
  const addRectangleHandler = () => {
    const id = nanoid()
    addRectangle({ id, ...initialRectAttr })
    setSelectedEl({ id, ...initialRectAttr })
  }
  return (
    <div className="flex h-full w-full justify-center p-4">
      {/* box */}
      <div
        onClick={addRectangleHandler}
        className="h-16 w-20 cursor-pointer rounded-md bg-slate-600 p-2 shadow-sm shadow-slate-600"
      >
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
