import { KonvaEventObject } from 'konva/lib/Node'
import React, { useRef, useEffect, LegacyRef, useState } from 'react'
import { Transformer, Circle } from 'react-konva'
import { useCircleStore } from '../../../store/shapes'
import { circle } from '../../../types/canvas.type'

interface Props {
  shapeProps: circle
}

const CircleShape: React.FC<Props> = ({ shapeProps }) => {
  // global state - Circle state store
  const selectedCircle = useCircleStore((state) => state.selected)
  const selectCircle = useCircleStore((state) => state.select)
  const onDragCircle = useCircleStore((state) => state.onDrag)
  const transformCircle = useCircleStore((state) => state.onTransform)

  const [isSelected, setIsSelected] = useState<boolean>(false)

  useEffect(() => {
    if (selectedCircle && selectedCircle.id === shapeProps.id) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [selectedCircle, shapeProps])

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
      <Circle
        onClick={(evt: KonvaEventObject<MouseEvent>) => {
          evt.cancelBubble = true
          selectCircle(shapeProps)
        }}
        ref={shapeRef}
        x={shapeProps.x}
        y={shapeProps.y}
        radius={shapeProps.radius}
        draggable
        onDragStart={() => selectCircle(shapeProps)}
        onDragEnd={(e: any) => {
          onDragCircle(e.target.x(), e.target.y())
        }}
        stroke="black"
        onTransformEnd={() => {
          // transformer is changing scale
          const node: any = shapeRef.current
          // const scaleX = node.scaleX()
          // const scaleY = node.scaleY()
          // node.scaleX(1)
          // node.scaleY(1)
          transformCircle(node.x(), node.y(), node.radius())
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </>
  )
}
export default CircleShape
