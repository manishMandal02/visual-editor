import { useRouter } from 'next/router'
import React from 'react'

import { FaShapes } from 'react-icons/fa'
import { MdOutlineTextFields } from 'react-icons/md'
import { useProjectBoardStore } from '../../../store/projectBoard'

const LeftMenu = () => {
  // On menu click
  const setSelectedElNull = useProjectBoardStore(
    (state) => state.setSelectedElNull
  )
  const setHoveredElNull = useProjectBoardStore(
    (state) => state.setHoveredElNull
  )

  const router = useRouter()
  const setSearchParams = (menu: string) => {
    setSelectedElNull()
    setHoveredElNull()
    router.push({
      query: { m: menu },
    })
  }

  return (
    <div className=" w-full py-4 text-white">
      <div className="-ml-1 flex  flex-col items-center justify-center p-2 px-4">
        <div
          onClick={() => {
            setSearchParams('shapes')
          }}
          className=" flex cursor-pointer flex-col items-center justify-center border-sky-700  p-2 text-sm text-gray-50"
        >
          <FaShapes className="mb-1 rounded-md border-2 border-gray-500 p-3 text-6xl" />
          Shapes
        </div>
        <div
          onClick={() => {
            setSearchParams('text')
          }}
          className=" mt-1 flex cursor-pointer flex-col items-center justify-center border-sky-700 text-gray-50"
        >
          <MdOutlineTextFields className="mb-1 rounded-md  border-2 border-gray-500 p-3 text-6xl" />
          Text
        </div>
      </div>
    </div>
  )
}

export default LeftMenu
