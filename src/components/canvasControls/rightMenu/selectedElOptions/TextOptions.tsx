import React, { useEffect, useState } from 'react'
import { useAppStore } from '../../../../store/index'
import { Text, TextAlign } from '../../../../types/canvas.type'

interface Props {
  selectedEl: Text
}

const TextOptions: React.FC<Props> = ({ selectedEl }) => {
  const [text, setText] = useState<string>('')
  const [textColor, setTextColor] = useState<string>('#ffffff')
  const [opacity, setOpacity] = useState<number>(100)
  const [fontSize, setFontSize] = useState<number>(20)
  const [fontFamily, setFontFamily] = useState<string>('')
  const [textAlign, setTextAlign] = useState<TextAlign>('center')
  const [lineHeight, setLineHeight] = useState<number>(1)

  useEffect(() => {
    setText(selectedEl.text)
    setTextColor(selectedEl.style.color)
    setOpacity(selectedEl.style.opacity)
    setFontSize(selectedEl.style.fontSize)
    setFontFamily(selectedEl.style.fontFamily)
    setTextAlign(selectedEl.style.align)
    setLineHeight(selectedEl.style.lineHeight)
  }, [selectedEl])

  useEffect(() => {
    onTextPropertiesUpdate({
      color: textColor,
      align: textAlign,
      opacity,
      fontFamily,
      fontSize,
      lineHeight,
    })
  }, [
    textColor,
    textAlign,
    opacity,
    fontFamily,
    fontSize,
    lineHeight,
    selectedEl,
  ])

  useEffect(() => {
    onTextUpdate(selectedEl.id, text)
  }, [text, selectedEl])

  // global state - shape store
  const onTextPropertiesUpdate = useAppStore(
    (state) => state.onTextPropertiesUpdate
  )
  const onTextUpdate = useAppStore((state) => state.onTextUpdate)

  return (
    <div className="p-5 text-gray-100">
      <div>
        <p className="mb-1 ml-2 tracking-wide">Text</p>
        <div className=" rounded-md  p-2">
          <input
            className="rounded-sm px-2 py-1 text-black"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>
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
      </div>
    </div>
  )
}

export default TextOptions
