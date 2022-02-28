import React from 'react'
import { useProjectBoardStore } from '../../../store/projectBoard'
import MenuOptions from './menuOptions/Index'
import SelectedElOptions from './selectedElOptions/Index'

const RightMenu = () => {
  // global state - selected element
  const selectedEl = useProjectBoardStore((state) => state.selectedEl)
  return (
    <div className="">
      {selectedEl ? (
        <SelectedElOptions selectedEl={selectedEl} />
      ) : (
        <MenuOptions />
      )}
    </div>
  )
}

export default RightMenu
