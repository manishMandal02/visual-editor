import React, { useEffect, useState } from 'react'
import { useTextStore } from '../../../../store/text'
import { text, textColor } from '../../../../types/canvas.type'

interface Props {
  selectedEl: text
}

const TextOptions: React.FC<Props> = ({ selectedEl }) => {
  const [textColor, setTextColor] = useState<textColor>({
    color: '#ffffff',
    opacity: 100,
  })
  const [text, setText] = useState<string>('')

  useEffect(() => {
    setTextColor(selectedEl.color)
    setText(selectedEl.text)
  }, [selectedEl])

  useEffect(() => {
    onColorUpdate({
      id: selectedEl.id,
      color: textColor.color,
      opacity: textColor.opacity,
    })
  }, [textColor, selectedEl])

  useEffect(() => {
    onTextUpdate(selectedEl.id, text)
  }, [text, selectedEl])

  // global state - shape store
  const onColorUpdate = useTextStore((state) => state.onColorUpdate)
  const onTextUpdate = useTextStore((state) => state.onTextUpdate)

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
              value={textColor.color}
              onChange={(e) => {
                setTextColor((state) => ({
                  ...state,
                  color: e.target.value,
                }))
              }}
              className="appearance-none"
            />
          </div>
          <div className="mt-2 flex items-center justify-between p-1">
            <p>Opacity</p>
            <input
              type="range"
              value={textColor.opacity}
              onChange={(e) => {
                setTextColor((state) => ({
                  ...state,
                  opacity: Number(e.target.value),
                }))
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextOptions