import { nanoid } from 'nanoid'
import React from 'react'
import { TYPE_TEXT } from '../../../../constants'
import { useAppStore } from '../../../../store/index'
import { Text as TextType } from '../../../../types/canvas.type'

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
        fontFamily: 'Poppins',
        fontSize: 20,
        lineHeight: 1,
      },
    }
    addText(initialRectAttr)
    setHoveredEl(initialRectAttr)
  }
  return (
    <div className=" flex items-center justify-center text-gray-50">
      <button
        onClick={addTextToBoard}
        className="w-5/6 rounded-md bg-primary py-2 font-medium"
      >
        Add Text
      </button>
    </div>
  )
}

export default TextMenu
