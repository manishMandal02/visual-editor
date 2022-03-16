import React from 'react'
import { useAppStore } from '../../store/index'
import LeftMenu from './leftMenu/Index'
import RightMenu from './rightMenu/Index'
import Shapes from './rightMenu/menuOptions/elementsMenu/Shapes'

const CanvasControls = () => {
  // global state - selectedEl
  const selectedEl = useAppStore((state) => state.selectedEl)
  const selectedMenu = useAppStore((state) => state.selectedMenu)
  return (
    <div onClick={(e) => e.stopPropagation()} className="flex h-full ">
      {/* left menu */}
      <>
        <LeftMenu />
      </>
      {/* right options */}
      <>
        <RightMenu />
      </>
    </div>
  )
}

export default CanvasControls
