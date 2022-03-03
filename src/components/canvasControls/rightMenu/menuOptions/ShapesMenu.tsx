import { nanoid } from 'nanoid'
import React from 'react'
import { CIRCLE, RECTANGLE, TYPE_SHAPE } from '../../../../constants'
import { useProjectBoardStore } from '../../../../store/projectBoard'
import { useShapeStore } from '../../../../store/shapes'
import { circle, rectangle } from '../../../../types/canvas.type'

const Shapes = () => {
  //global state - selectEl
  const setHoveredEl = useProjectBoardStore((state) => state.setHoveredEl)

  // global state - add shapes
  const addShape = useShapeStore((state) => state.addShape)

  const addCircleHandler = () => {
    const id = nanoid()
    const initialCircleAttr: circle = {
      type: TYPE_SHAPE,
      subType: CIRCLE,
      id,
      x: 130,
      y: 250,
      radius: 50,
      fill: { color: '#ffffff', opacity: 0 },
      border: { color: '#000000', opacity: 100, size: 2 },
    }
    addShape(initialCircleAttr)
    setHoveredEl(initialCircleAttr)
  }
  const addRectangleHandler = () => {
    const id = nanoid()
    const initialRectAttr: rectangle = {
      type: TYPE_SHAPE,
      subType: RECTANGLE,
      id,
      x: 130,
      y: 250,
      width: 100,
      height: 50,
      fill: { color: '#ffffff', opacity: 0 },
      border: { color: '#000000', opacity: 100, size: 2 },
    }
    addShape(initialRectAttr)
    setHoveredEl(initialRectAttr)
  }
  return (
    <div className="flex h-full w-full justify-center ">
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
