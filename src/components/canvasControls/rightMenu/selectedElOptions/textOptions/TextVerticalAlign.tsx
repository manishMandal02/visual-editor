import React from 'react'
import {
  AiOutlineVerticalAlignBottom,
  AiOutlineVerticalAlignMiddle,
  AiOutlineVerticalAlignTop,
} from 'react-icons/ai'
import { TextAlignVertical } from '../../../../../types/canvas.type'

interface Props {
  selected: string
  onChange: (align: TextAlignVertical) => void
}

const TextVerticalAlign: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <>
      <div className="flex  rounded-md   py-1.5  px-2.5 shadow-sm shadow-slate-700  ">
        <span
          className={`cursor-pointer rounded-md   p-1 text-2xl transition-all duration-150 ${
            selected === 'top' && 'bg-slate-200 text-black'
          }`}
          onClick={() => {
            onChange('top')
          }}
        >
          <AiOutlineVerticalAlignTop />
        </span>
        <span
          className={`ml-2.5 cursor-pointer rounded-md    p-1 text-2xl transition-all duration-150  ${
            selected === 'middle' && 'bg-slate-200 text-black'
          }`}
          onClick={() => {
            onChange('middle')
          }}
        >
          <AiOutlineVerticalAlignMiddle />
        </span>
        <span
          className={`ml-2.5 cursor-pointer rounded-md   p-1 text-2xl transition-all duration-150 ${
            selected === 'bottom' && 'bg-slate-200 text-black'
          }`}
          onClick={() => {
            onChange('bottom')
          }}
        >
          <AiOutlineVerticalAlignBottom />
        </span>
      </div>
    </>
  )
}

export default TextVerticalAlign
