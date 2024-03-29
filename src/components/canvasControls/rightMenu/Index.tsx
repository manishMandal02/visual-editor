import React, { useEffect, useState } from 'react'
import { useAppStore } from '../../../store/index'
import MenuOptions from './menuOptions/Index'
import SelectedElOptions from './selectedElOptions/Index'

const RightMenu = () => {
  // global state - selected element
  const selectedEl = useAppStore((state) => state.selectedEl)
  const selectedMenu = useAppStore((state) => state.selectedMenu)

  const [showMenu, setShowMenu] = useState(true)

  useEffect(() => {
    if (selectedMenu || selectedEl) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }, [selectedEl, selectedMenu])

  return (
    <div
      className={`overflow-hidden overflow-y-auto  bg-primary-dark transition-all duration-200 ${
        showMenu ? 'block w-11/12' : ' hidden'
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
