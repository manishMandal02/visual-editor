import { KonvaEventObject } from 'konva/lib/Node'
import React, { useRef, useEffect, LegacyRef, useState } from 'react'
import { Transformer, Circle } from 'react-konva'
import { useProjectBoardStore } from '../../../store/projectBoard'
import { useCircleStore } from '../../../store/shapes'
import { circle } from '../../../types/canvas.type'

interface Props {
  shapeProps: circle
}

const CircleShape: React.FC<Props> = ({ shapeProps }) => {
  // global state - Circle state store
  const selectedEl = useProjectBoardStore((state) => state.selectedEl)
  const setSelectedEl = useProjectBoardStore((state) => state.setSelectedEl)
  const onDragCircle = useCircleStore((state) => state.onDrag)
  const transformCircle = useCircleStore((state) => state.onTransform)

  const [isSelected, setIsSelected] = useState<boolean>(false)

  useEffect(() => {
    if (selectedEl && selectedEl.id === shapeProps.id) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [selectedEl, shapeProps])

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
          setSelectedEl(shapeProps)
        }}
        ref={shapeRef}
        x={shapeProps.x}
        y={shapeProps.y}
        radius={shapeProps.radius}
        draggable
        onDragStart={() => setSelectedEl(shapeProps)}
        onDragEnd={(e: any) => {
          onDragCircle({ id: shapeProps.id, x: e.target.x(), y: e.target.y() })
        }}
        stroke="black"
        onTransformEnd={() => {
          // transformer is changing scale
          const node: any = shapeRef.current
          // const scaleX = node.scaleX()
          // const scaleY = node.scaleY()
          // node.scaleX(1)
          // node.scaleY(1)
          transformCircle({
            id: shapeProps.id,
            x: node.x(),
            y: node.y(),
            radius: node.radius(),
          })
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </>
  )
}
export default CircleShape
