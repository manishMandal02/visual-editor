import React, { useEffect, useState } from 'react'
import { useAppStore } from '../../../../../store/index'
import { Shape, ShapeStyle } from '../../../../../types/canvas.type'
import RightMenuHeader from '../../../../ui/RightMenuHeader'

interface Props {
  selectedEl: Shape
}

const ElementOptions: React.FC<Props> = ({ selectedEl }) => {
  // state - shape styles
  const [shapeStyle, setShapeStyle] = useState<ShapeStyle>({
    fillColor: '#ffffff',
    strokeColor: '#000000',
    strokeWidth: 2,
  })

  useEffect(() => {
    setShapeStyle(selectedEl.style)
  }, [selectedEl])

  useEffect(() => {
    onStyleChange({
      fillColor: shapeStyle.fillColor,
      strokeColor: shapeStyle.strokeColor,
      strokeWidth: shapeStyle.strokeWidth,
    })
  }, [shapeStyle, selectedEl])

  // global state - shape store
  const onStyleChange = useAppStore((state) => state.onStyleChange)

  return (
    <>
      {/* TODO: update menu name to sub type */}
      <RightMenuHeader menu={`Edit Element`} />

      <div>
        <p className="mb-1 ml-2 tracking-wide">Fill</p>
        <div className=" rounded-md border border-slate-600 p-2">
          <div className="flex items-center justify-between p-1">
            <p>Color</p>
            <input
              type="color"
              value={shapeStyle.fillColor}
              onChange={(e) => {
                setShapeStyle((state) => ({
                  ...state,
                  fillColor: e.target.value,
                }))
              }}
              className="appearance-none"
            />
          </div>
        </div>
      </div>
      <p className="mb-1 ml-2 mt-6 tracking-wide">Border</p>
      <div className=" rounded-md border border-slate-600 p-2">
        <div className="flex items-center justify-between p-1">
          <p>Color</p>
          <input
            type="color"
            value={shapeStyle.strokeColor}
            onChange={(e) => {
              setShapeStyle((state) => ({
                ...state,
                strokeColor: e.target.value,
              }))
            }}
            className="appearance-none"
          />
        </div>
        <div className="mt-2 flex items-center justify-between p-1">
          <p>Size</p>
          <input
            className=" w-10 text-center text-primary-dark"
            type="number"
            min={0}
            value={shapeStyle.strokeWidth}
            onChange={(e) => {
              setShapeStyle((state) => ({
                ...state,
                strokeWidth: Number(e.target.value),
              }))
            }}
          />
        </div>
      </div>
    </>
  )
}

export default ElementOptions
