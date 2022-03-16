import React from 'react'
import { useAppStore } from '../../../store/index'
import MenuOptions from './menuOptions/Index'
import SelectedElOptions from './selectedElOptions/Index'

const RightMenu = () => {
  // global state - selected element
  const selectedEl = useAppStore((state) => state.selectedEl)
  const selectedMenu = useAppStore((state) => state.selectedMenu)

  return (
    <div
      className={`h-full  bg-primary-dark transition-all duration-200 ${
        selectedMenu ? 'block w-4/5' : ' hidden'
      }`}
    >
      {selectedEl ? (
        <SelectedElOptions selectedEl={selectedEl} />
      ) : (
        <MenuOptions />
      )}
    </div>
  )
}

export default RightMenu
