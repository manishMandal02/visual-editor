import { KonvaEventObject } from 'konva/lib/Node'
import React, { useEffect, useRef, useState } from 'react'
import { Rect, Transformer } from 'react-konva'
import { useProjectBoardStore } from '../../../store/projectBoard'
import { useRectangleStore } from '../../../store/shapes'
import { rectangle } from '../../../types/canvas.type'

interface Props {
  shapeProps: rectangle
}

const RectangleShape: React.FC<Props> = ({ shapeProps }) => {
  // global state - Rectangle state store
  const selectedEl = useProjectBoardStore((state) => state.selectedEl)
  const setSelectedEl = useProjectBoardStore((state) => state.setSelectedEl)
  const onDragRectangle = useRectangleStore((state) => state.onDrag)
  const transformRectangle = useRectangleStore((state) => state.onTransform)

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
      <Rect
        onClick={(evt: KonvaEventObject<MouseEvent>) => {
          evt.cancelBubble = true
          setSelectedEl(shapeProps)
        }}
        ref={shapeRef}
        x={shapeProps.x}
        y={shapeProps.y}
        width={shapeProps.width}
        height={shapeProps.height}
        draggable
        onDragStart={() => setSelectedEl(shapeProps)}
        onDragEnd={(e: any) => {
          onDragRectangle({
            id: shapeProps.id,
            x: e.target.x(),
            y: e.target.y(),
          })
        }}
        stroke="black"
        onTransformEnd={() => {
          // transformer is changing scale
          const node: any = shapeRef.current
          // const scaleX = node.scaleX()
          // const scaleY = node.scaleY()
          // node.scaleX(1)
          // node.scaleY(1)
          transformRectangle({
            id: shapeProps.id,
            x: node.x(),
            y: node.y(),
            height: node.height(),
            width: node.width(),
          })
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </>
  )
}

export default RectangleShape
