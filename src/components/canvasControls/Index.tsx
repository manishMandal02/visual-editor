import React from 'react'
import { useProjectBoardStore } from '../../store/projectBoard'
import LeftMenu from './leftMenu/Index'
import RightMenu from './rightMenu/Index'
import Shapes from './rightMenu/menuOptions/ShapesMenu'

const CanvasControls = () => {
  // global state - selectedEl
  const selectedEl = useProjectBoardStore((state) => state.selectedEl)
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex h-full bg-primary-dark2 "
    >
      {/* left menu */}
      <div className="h-full w-1/5 bg-slate-700">
        <LeftMenu />
      </div>
      {/* right options */}
      <div className="h-full w-4/5">
        <RightMenu />
      </div>
    </div>
  )
}

export default CanvasControls
