import React from 'react'
import { useAppStore } from '../../../store/index'
import MenuOptions from './menuOptions/Index'
import SelectedElOptions from './selectedElOptions/Index'

const RightMenu = () => {
  // global state - selected element
  const selectedEl = useAppStore((state) => state.selectedEl)
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
