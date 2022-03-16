import { useRouter } from 'next/router'
import React from 'react'
import { useAppStore } from '../../../../store'
import ElementsMenu from './elementsMenu/Index'
import ShapesMenu from './elementsMenu/Shapes'
import ImagesMenu from './ImagesMenu'
import SettingsMenu from './settingsMenu/Index'
import TemplateMenu from './templateMenu/Index'
import TextMenu from './TextMenu'

const MenuOptions = () => {
  // global state - selected menu
  const selectedMenu = useAppStore((state) => state.selectedMenu)
  return (
    <div className="">
      {selectedMenu === 'elements' ? (
        <ElementsMenu />
      ) : selectedMenu === 'templates' ? (
        <TemplateMenu />
      ) : selectedMenu === 'text' ? (
        <TextMenu />
      ) : selectedMenu === 'images' ? (
        <ImagesMenu />
      ) : selectedMenu === 'settings' ? (
        <SettingsMenu />
      ) : (
        <p className="text-gray-300">{selectedMenu}</p>
      )}
    </div>
  )
}

export default MenuOptions
