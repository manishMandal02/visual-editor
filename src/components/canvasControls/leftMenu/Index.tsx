import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { FaShapes, FaRegImage } from 'react-icons/fa'
import { RiSettingsFill } from 'react-icons/ri'
import { HiTemplate } from 'react-icons/hi'
import { MdOutlineTextFields } from 'react-icons/md'
import { useAppStore } from '../../../store/index'

const menuItems = [
  {
    name: 'Settings',
    icon: RiSettingsFill,
  },
  {
    name: 'Templates',
    icon: HiTemplate,
  },
  {
    name: 'Elements',
    icon: FaShapes,
  },
  {
    name: 'Text',
    icon: MdOutlineTextFields,
  },
  {
    name: 'Images',
    icon: FaRegImage,
  },
]

const LeftMenu = () => {
  // On menu click
  const setSelectedElNull = useAppStore((state) => state.setSelectedElNull)
  const setHoveredElNull = useAppStore((state) => state.setHoveredElNull)
  const selectedEl = useAppStore((state) => state.selectedEl)

  const router = useRouter()
  const setSearchParams = (menu: string) => {
    setSelectedElNull()
    setHoveredElNull()
    router.push({
      query: { m: menu },
    })
  }

  const isSelectedMenu = (menu: string) => {
    if (selectedEl) {
      return null
    }
    return menu.toLowerCase() === router.query.m
  }

  // useEffect(() => {
  //   if (selectedEl) {
  //     router.push({
  //       query: {
  //         m:
  //           selectedEl.type === 'shape'
  //             ? 'elements'
  //             : selectedEl.type === 'text'
  //             ? 'text'
  //             : selectedEl.type === 'image'
  //             ? 'images'
  //             : 'settings',
  //       },
  //     })
  //   }
  // }, [selectedEl])

  return (
    <div className="h-full w-full bg-primary-mid text-white">
      <div className=" flex  flex-col items-center justify-center ">
        {menuItems.map((menu) => {
          const Icon = menu.icon
          return (
            <div
              key={menu.name}
              onClick={() => {
                setSearchParams(menu.name.toLowerCase())
              }}
              className={`flex w-full cursor-pointer flex-col items-center justify-center border-l-3   p-3 text-xs font-medium text-slate-400 transition-all duration-300 hover:text-slate-300 ${
                isSelectedMenu(menu.name)
                  ? ' border-primary bg-primary bg-opacity-5'
                  : 'border-primary-mid'
              } `}
            >
              <menu.icon
                className="
            mb-1 rounded-md text-2xl"
              />
              {menu.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LeftMenu
