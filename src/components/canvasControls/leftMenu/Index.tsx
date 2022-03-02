import React from 'react'

import { FaShapes } from 'react-icons/fa'
import { MdOutlineTextFields } from 'react-icons/md'

const LeftMenu = () => {
  return (
    <div className=" w-full py-4 text-white">
      <div className="-ml-1 flex  flex-col items-center justify-center p-2 px-4">
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-sky-700 p-2  text-sm">
          <FaShapes className="mb-1 text-3xl" />
          Shapes
        </div>
        <div className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-sky-700 p-2 px-5 text-sm">
          <MdOutlineTextFields className="text-3xl" />
          Text
        </div>
      </div>
    </div>
  )
}

export default LeftMenu
