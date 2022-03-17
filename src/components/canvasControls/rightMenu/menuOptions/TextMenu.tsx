import { nanoid } from 'nanoid'
import React from 'react'
import { TYPE_TEXT } from '../../../../constants'
import { useAppStore } from '../../../../store/index'
import { Text as TextType } from '../../../../types/canvas.type'
import RightMenuHeader from '../../../ui/RightMenuHeader'

const TextMenu = () => {
  // global state
  const addText = useAppStore((state) => state.addText)
  const setHoveredEl = useAppStore((state) => state.setHoveredEl)
  const addTextToBoard = () => {
    const id = nanoid()
    const initialRectAttr: TextType = {
      type: TYPE_TEXT,
      subType: TYPE_TEXT,
      id,
      text: 'Sample Text',
      x: 130,
      y: 250,
      width: 130,
      height: 25,
      style: {
        color: '#000000',
        opacity: 100,
        align: 'center',
        font: 'Poppins',
        fontSize: 20,
        lineHeight: 1,
      },
    }
    addText(initialRectAttr)
    setHoveredEl(initialRectAttr)
  }
  return (
    <>
      <RightMenuHeader menu={'Add Text'} />
      <div className="mt-3 flex items-center justify-center text-gray-50">
        <button
          onClick={addTextToBoard}
          className="w-5/6 rounded-md bg-primary-secondary py-2 font-medium"
        >
          Add Text
        </button>
      </div>
      <div className="mt-6 flex items-center justify-evenly ">
        <div className="cursor-pointer rounded-lg border-2 p-2 text-center text-slate-200">
          Font <br /> Style 01
        </div>
        <div className="cursor-pointer rounded-lg border-2 p-2 text-center text-slate-200">
          Font <br /> Style 02
        </div>
        <div className="cursor-pointer rounded-lg border-2 p-2 text-center text-slate-200">
          Font <br /> Style 03
        </div>
      </div>
      <p className="mt-8 text-center text-slate-300 ">
        More font styles coming soon...
      </p>
    </>
  )
}

export default TextMenu
