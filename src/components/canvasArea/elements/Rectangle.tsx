import { KonvaEventObject } from 'konva/lib/Node'
import React, { useEffect, useRef, useState } from 'react'
import { Rect, Transformer } from 'react-konva'
import { useRectangleStore } from '../../../store/canvasShapes'
import { rectangle } from '../../../types/canvas.type'

interface Props {
  shapeProps: rectangle
}

const RectangleShape: React.FC<Props> = ({ shapeProps }) => {
  // global state - Rectangle state store
  const selectedRectangle = useRectangleStore((state) => state.selected)
  const selectRectangle = useRectangleStore((state) => state.select)
  const onDragRectangle = useRectangleStore((state) => state.onDrag)
  const transformRectangle = useRectangleStore((state) => state.onTransform)

  const [isSelected, setIsSelected] = useState<boolean>(false)

  useEffect(() => {
    if (selectedRectangle && selectedRectangle.id === shapeProps.id) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [selectedRectangle, shapeProps])

  // shape size and transform
  const shapeRef = useRef(null)
  const trRef = useRef<any>(null)
  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current])
      trRef.current.getLayer().batchDraw()
    }
  }, [isSelected])
  return (
    <>
      <Rect
        onClick={(evt: KonvaEventObject<MouseEvent>) => {
          evt.cancelBubble = true
          selectRectangle(shapeProps)
        }}
        ref={shapeRef}
        x={shapeProps.x}
        y={shapeProps.y}
        width={shapeProps.width}
        height={shapeProps.height}
        draggable
        onDragStart={() => selectRectangle(shapeProps)}
        onDragEnd={(e: any) => {
          onDragRectangle(e.target.x(), e.target.y())
        }}
        stroke="black"
        onTransformEnd={() => {
          // transformer is changing scale
          const node: any = shapeRef.current
          // const scaleX = node.scaleX()
          // const scaleY = node.scaleY()
          // node.scaleX(1)
          // node.scaleY(1)
          transformRectangle(node.x(), node.y(), node.height(), node.width())
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </>
  )
}

export default RectangleShape
