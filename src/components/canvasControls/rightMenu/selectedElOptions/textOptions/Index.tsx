import React, { useEffect, useState } from 'react'
import { useAppStore } from '../../../../../store/index'
import {
  Text,
  TextAlign,
  TextAlignVertical,
} from '../../../../../types/canvas.type'
import ColorPicker from '../../../../ui/colorPicker/Index'
import FontSelector from '../../../../ui/FontSelector'
import RightMenuHeader from '../../../../ui/RightMenuHeader'
import TextAlignBtn from './TextAlignBtn'

import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
} from 'react-icons/ai'
import { CgFontHeight, CgFontSpacing } from 'react-icons/cg'
import TextVerticalAlign from './TextVerticalAlign'

interface Props {
  selectedEl: Text
}

const fontsCategories = [
  'sans-serif',
  'serif',
  'display',
  'handwriting',
  'monospace',
]

const TextOptions: React.FC<Props> = ({ selectedEl }) => {
  const [text, setText] = useState<string>('')
  const [textColor, setTextColor] = useState<string>('#ffffff')
  const [opacity, setOpacity] = useState<number>(100)
  const [fontSize, setFontSize] = useState<number>(20)
  const [font, setFont] = useState<string>('')
  const [textAlign, setTextAlign] = useState<TextAlign>('center')
  const [textAlignVertical, setTextAlignVertical] =
    useState<TextAlignVertical>('middle')
  const [lineHeight, setLineHeight] = useState<number>(1)

  useEffect(() => {
    setText(selectedEl.text)
    setTextColor(selectedEl.style.color)
    setOpacity(selectedEl.style.opacity)
    setFontSize(selectedEl.style.fontSize)
    setFont(selectedEl.style.font)
    setTextAlign(selectedEl.style.align)
    setLineHeight(selectedEl.style.lineHeight)
  }, [selectedEl])

  useEffect(() => {
    onTextPropertiesUpdate({
      color: textColor,
      align: textAlign,
      alignVertical: textAlignVertical,
      opacity,
      font,
      fontSize,
      lineHeight,
    })
  }, [textColor, textAlign, opacity, font, fontSize, lineHeight, selectedEl])

  useEffect(() => {
    onTextUpdate(selectedEl.id, text)
  }, [text, selectedEl])

  // global state - shape store
  const onTextPropertiesUpdate = useAppStore(
    (state) => state.onTextPropertiesUpdate
  )
  const onTextUpdate = useAppStore((state) => state.onTextUpdate)

  return (
    <>
      <RightMenuHeader menu="Edit Text" />
      <div className="text-primary-gray">
        <div className=" flex  flex-col rounded-md p-2 px-3">
          <p className="mb-1 ml-1 font-medium tracking-wide">Text</p>
          <textarea
            className="outline-nones rounded-sm  px-2 py-1 text-black outline-none"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>
        {/* font type & font Size */}
        <div className="flex w-full items-center justify-evenly p-1 px-3">
          <div className="w-3/4">
            <FontSelector selected={font} onChange={setFont} />
          </div>
          <div className="ml-1 w-3/12">
            <input
              type="number"
              value={fontSize}
              onChange={(e) => {
                setFontSize(Number(e.target.value))
              }}
              className="showArrowCC max-w-full rounded py-1 px-1.5 text-black outline-none"
            />
          </div>
        </div>
        {/* Font Alignment, Strikethrough & color */}
        <div className=" mt-1 flex w-full items-center justify-between p-1 px-3 ">
          <div className="flex  rounded-md   py-1.5  px-2 shadow-sm shadow-slate-700  ">
            <span
              className={`cursor-pointer rounded-md   p-1 text-2xl transition-all duration-150 
              `}
              // ${'bg-slate-200 text-black'}
              onClick={() => {
                // onChange('left')
              }}
            >
              <AiOutlineStrikethrough className=" scale-135 cursor-pointer rounded-md p-1 text-2xl transition-all duration-150" />
            </span>
          </div>
          <TextAlignBtn selected={textAlign} onChange={setTextAlign} />
          <ColorPicker selected={textColor} onChange={setTextColor} />
        </div>
        {/* bold, italic, line height, letter spacing */}
        <div className=" mt-1 flex w-full items-center justify-between p-1 px-3">
          <div className="flex  rounded-md   py-1.5  px-2.5 shadow-sm shadow-slate-700  ">
            <span
              className={`cursor-pointer rounded-md   p-1 text-2xl transition-all duration-150 ${'bg-slate-200 text-black'}`}
              onClick={() => {
                // onChange('left')
              }}
            >
              <AiOutlineBold />
            </span>
            <span
              className={`ml-2.5 cursor-pointer rounded-md   p-1 text-2xl transition-all duration-150 ${'bg-slate-200 text-black'}`}
              onClick={() => {
                // onChange('left')
              }}
            >
              <AiOutlineItalic />
            </span>
            <span
              className={`ml-2.5 cursor-pointer rounded-md   p-1 text-2xl transition-all duration-150 ${'bg-slate-200 text-black'}`}
              onClick={() => {
                // onChange('left')
              }}
            >
              <AiOutlineUnderline />
            </span>
          </div>

          <TextVerticalAlign
            selected={textAlignVertical}
            onChange={setTextAlignVertical}
          />
        </div>
        <div className="mt-2 flex w-full flex-col  items-start justify-center p-1">
          <p>Opacity</p>
          <div className="flex w-full items-center px-2">
            <input
              type="range"
              min={0}
              max={100}
              value={opacity}
              onChange={(e) => {
                setOpacity(Number(e.target.value))
              }}
              className="rangeSlideCC h-2 w-full rounded bg-slate-200 opacity-90 outline-none hover:opacity-100"
            />
            <div className="ml-3 w-12">
              <input
                type="number"
                value={opacity}
                onChange={(e) => {
                  setOpacity(Number(e.target.value))
                }}
                className="showArrowCC max-w-full rounded py-1 px-1.5 text-sm text-black outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-4 text-gray-200">
        <p className="tracking-wid mb-2 ml-2 mt-4">Fill</p>
        <div className=" rounded-md border border-slate-600 p-2">
          <div className="flex items-center justify-between p-1">
            <p>Color</p>
            <input
              type="color"
              value={textColor}
              onChange={(e) => {
                setTextColor(e.target.value)
              }}
              className="appearance-none"
            />
          </div>
          <div className="mt-2 flex items-center justify-between p-1">
            <p>Opacity</p>
            <input
              type="range"
              value={opacity}
              onChange={(e) => {
                setOpacity(Number(e.target.value))
              }}
            />
          </div>
        </div>
      </div> */}
    </>
  )
}

export default TextOptions
