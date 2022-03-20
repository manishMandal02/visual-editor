import React, { useEffect, useState } from 'react'
import { useAppStore } from '../../../../../store/index'
import {
  Text,
  TextAlign,
  TextAlignVertical,
  TextShadow as TextShadowType,
  TextSpacing as TextSpacingType,
  TextStroke as TextStrokeType,
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
import RangeSlider from '../../../../ui/RangeSlider'
import { nanoid } from 'nanoid'
import TextSpacing from './TextSpacing'
import TextShadow from './TextShadow'
import CurvedText from './CurvedText'
import TextStroke from './TextStroke'

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

  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isLineThrough, setIsLineThrough] = useState(false)
  const [stroke, setStroke] = useState<TextStrokeType>({
    isApplied: false,
    color: '',
    size: 0,
  })
  const [spacing, setSpacing] = useState<TextSpacingType>({
    letter: 1,
    line: 1,
  })
  const [textAlign, setTextAlign] = useState<TextAlign>('center')
  const [textAlignVertical, setTextAlignVertical] =
    useState<TextAlignVertical>('middle')
  const [shadow, setShadow] = useState<TextShadowType>({
    blur: 0,
    color: '',
    offSetX: 0,
    offSetY: 0,
    opacity: 0,
    isApplied: false,
  })

  useEffect(() => {
    setText(selectedEl.text)
    setTextColor(selectedEl.style.color)
    setOpacity(selectedEl.style.opacity)
    setFontSize(selectedEl.style.fontSize)
    setFont(selectedEl.style.font)
    setTextAlign(selectedEl.style.align)
    setIsBold(selectedEl.style.isBold)
    setIsItalic(selectedEl.style.isItalic)
    setIsUnderline(selectedEl.style.isUnderline)
    setIsLineThrough(selectedEl.style.isLineThrough)
    setStroke(selectedEl.style.stroke)
    setSpacing(selectedEl.style.spacing)
    setShadow(selectedEl.shadow)
  }, [selectedEl])

  useEffect(() => {
    onTextPropertiesUpdate({
      color: textColor,
      align: textAlign,
      alignVertical: textAlignVertical,
      opacity,
      font,
      fontSize,
      isBold,
      isItalic,
      isUnderline,
      isLineThrough,
      stroke,
      spacing,
    })
  }, [
    textColor,
    textAlign,
    opacity,
    font,
    fontSize,
    isBold,
    isItalic,
    isUnderline,
    isLineThrough,
    stroke,
    spacing,
    textAlignVertical,
    selectedEl,
  ])

  useEffect(() => {
    onShadowUpdate(shadow)
  }, [shadow, selectedEl])

  useEffect(() => {
    onTextUpdate(selectedEl.id, text)
  }, [text, selectedEl])

  // global state - shape store
  const onTextPropertiesUpdate = useAppStore(
    (state) => state.onTextPropertiesUpdate
  )
  const onShadowUpdate = useAppStore((state) => state.onTextShadow)
  const onTextUpdate = useAppStore((state) => state.onTextUpdate)

  return (
    <>
      <RightMenuHeader menu="Edit Text" />
      <div className=" overflow-y-auto text-primary-gray">
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
              min={1}
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
              ${isLineThrough && 'bg-slate-200 text-black'}
              `}
              onClick={() => {
                setIsLineThrough(!isLineThrough)
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
              className={`cursor-pointer rounded-md   p-1 text-2xl transition-all duration-150 ${
                isBold && 'bg-slate-200 text-black'
              }`}
              onClick={() => {
                setIsBold(!isBold)
              }}
            >
              <AiOutlineBold />
            </span>
            <span
              className={`ml-2.5 cursor-pointer rounded-md   p-1 text-2xl transition-all duration-150 ${
                isItalic && 'bg-slate-200 text-black'
              }`}
              onClick={() => {
                setIsItalic(!isItalic)
              }}
            >
              <AiOutlineItalic />
            </span>
            <span
              className={`ml-2.5 cursor-pointer rounded-md   p-1 text-2xl transition-all duration-150 ${
                isUnderline && 'bg-slate-200 text-black'
              }`}
              onClick={() => {
                setIsUnderline(!isUnderline)
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
        <>
          <TextSpacing onChange={setSpacing} spacing={spacing} />
        </>
        <>
          <RangeSlider
            // id={nanoid()}
            label="Opacity"
            value={opacity}
            onChange={(value) => setOpacity(value)}
          />
        </>
        <>
          <TextStroke onChange={setStroke} value={stroke} />
        </>
        <>
          <TextShadow value={shadow} onChange={setShadow} />
        </>
        {/* <>
          <CurvedText value={0} onChange={() => {}} />
        </> */}
      </div>
    </>
  )
}

export default TextOptions
