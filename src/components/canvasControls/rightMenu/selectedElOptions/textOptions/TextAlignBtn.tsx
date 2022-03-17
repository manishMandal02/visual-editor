import React from 'react'
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
} from 'react-icons/ai'
import { TextAlign } from '../../../../../types/canvas.type'

interface Props {
  selected: string
  onChange: (align: TextAlign) => void
}

const TextAlignBtn: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <>
      <div className="flex  rounded-md   py-1.5  px-2.5 shadow-sm shadow-slate-700  ">
        <span
          className={`cursor-pointer rounded-md   p-1 text-2xl transition-all duration-150 ${
            selected === 'left' && 'bg-slate-200 text-black'
          }`}
          onClick={() => {
            onChange('left')
          }}
        >
          <AiOutlineAlignLeft />
        </span>
        <span
          className={`ml-4 cursor-pointer rounded-md    p-1 text-2xl transition-all duration-150  ${
            selected === 'center' && 'bg-slate-200 text-black'
          }`}
          onClick={() => {
            onChange('center')
          }}
        >
          <AiOutlineAlignCenter />
        </span>
        <span
          className={`ml-4 cursor-pointer rounded-md   p-1 text-2xl transition-all duration-150 ${
            selected === 'right' && 'bg-slate-200 text-black'
          }`}
          onClick={() => {
            onChange('right')
          }}
        >
          <AiOutlineAlignRight />
        </span>
      </div>
    </>
  )
}

export default TextAlignBtn
