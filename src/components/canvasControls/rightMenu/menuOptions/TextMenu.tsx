import { nanoid } from 'nanoid'
import React from 'react'
import { TYPE_TEXT } from '../../../../constants'
import { useProjectBoardStore } from '../../../../store/projectBoard'
import { useTextStore } from '../../../../store/text'
import { text } from '../../../../types/canvas.type'

const TextMenu = () => {
  // global state - porject store
  const addText = useTextStore((state) => state.addText)
  // global state - pro store
  const setHoveredEl = useProjectBoardStore((state) => state.setHoveredEl)
  const addTextToBoard = () => {
    const id = nanoid()
    const initialRectAttr: text = {
      type: TYPE_TEXT,
      id,
      text: 'Sample Text',
      x: 130,
      y: 250,
      width: 100,
      height: 50,
      color: { color: '#000000', opacity: 100 },
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
