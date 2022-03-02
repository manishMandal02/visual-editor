import React, { useEffect, useState } from 'react'
import { useShapeStore } from '../../../../store/shapes'
import { shape, shapeBorder, shapeFill } from '../../../../types/canvas.type'

interface Props {
  selectedEl: shape
}

const ShapeOptions: React.FC<Props> = ({ selectedEl }) => {
  // state - shape styles
  const [shapeFill, setShapeFill] = useState<shapeFill>({
    color: '#ffffff',
    opacity: 100,
  })
  const [shapeBorder, setShapeBorder] = useState<shapeBorder>({
    color: '#000000',
    opacity: 100,
    size: 2,
  })

  useEffect(() => {
    setShapeFill(selectedEl.fill)
    setShapeBorder(selectedEl.border)
  }, [selectedEl])

  useEffect(() => {
    onFillUpdate({
      id: selectedEl.id,
      color: shapeFill.color,
      opacity: shapeFill.opacity,
    })
  }, [shapeFill, selectedEl])

  useEffect(() => {
    onBorderUpdate({
      id: selectedEl.id,
      color: shapeBorder.color,
      opacity: shapeBorder.opacity,
      size: shapeBorder.size,
    })
  }, [shapeBorder, selectedEl])
  // global state - shape store
  const onFillUpdate = useShapeStore((state) => state.onFillUpdate)

  const onBorderUpdate = useShapeStore((state) => state.onBorderUpdate)

  return (
    <div className="p-5 text-gray-100">
      <div>
        <p className="mb-1 ml-2 tracking-wide">Fill</p>
        <div className=" rounded-md border border-slate-600 p-2">
          <div className="flex items-center justify-between p-1">
            <p>Color</p>
            <input
              type="color"
              value={shapeFill.color}
              onChange={(e) => {
                setShapeFill((state) => ({
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
              value={shapeFill.opacity}
              onChange={(e) => {
                setShapeFill((state) => ({
                  ...state,
                  opacity: Number(e.target.value),
                }))
              }}
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
            value={shapeBorder.color}
            onChange={(e) => {
              setShapeBorder((state) => ({
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
            value={shapeBorder.opacity}
            onChange={(e) => {
              setShapeBorder((state) => ({
                ...state,
                opacity: Number(e.target.value),
              }))
            }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between p-1">
          <p>Size</p>
          <input
            className=" w-10 text-center text-primary-dark"
            type="number"
            min={0}
            value={shapeBorder.size}
            onChange={(e) => {
              setShapeBorder((state) => ({
                ...state,
                size: Number(e.target.value),
              }))
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ShapeOptions
