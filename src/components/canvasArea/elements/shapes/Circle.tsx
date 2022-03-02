import { KonvaEventObject } from 'konva/lib/Node'
import React, { useRef, useEffect, LegacyRef, useState } from 'react'
import { Transformer, Circle } from 'react-konva'
//
import { CIRCLE, TYPE_SHAPE } from '../../../../constants'
import { useProjectBoardStore } from '../../../../store/projectBoard'
import { useShapeStore } from '../../../../store/shapes'
import { circle, element } from '../../../../types/canvas.type'

interface Props {
  shapeProps: circle
  isSelected: boolean
  isHovered: boolean
  onClick: (el: element) => void
  onHover: (el: element) => void
  onDrag: (value: { id: string; x: number; y: number }) => void
  onTransform: (circle: circle) => void
  onHoverEnd: () => void
}

const CircleShape: React.FC<Props> = ({
  shapeProps,
  isSelected,
  isHovered,
  onHover,
  onClick,
  onDrag,
  onTransform,
  onHoverEnd,
}) => {
  // shape size and transform
  const shapeRef = useRef(null)
  const trRef = useRef<any>(null)
  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current])
      trRef.current.getLayer().batchDraw()
    }
  }, [isSelected])
  useEffect(() => {
    if (isHovered) {
      trRef.current.nodes([shapeRef.current])
      trRef.current.getLayer().batchDraw()
    }
  }, [isHovered])

  console.log(isHovered)

  return (
    <>
      <Circle
        onClick={(evt: KonvaEventObject<MouseEvent>) => {
          evt.cancelBubble = true
          onClick(shapeProps)
        }}
        onMouseOver={() => onHover(shapeProps)}
        onMouseLeave={() => onHoverEnd()}
        ref={shapeRef}
        x={shapeProps.x}
        y={shapeProps.y}
        radius={shapeProps.radius}
        draggable
        onDragStart={() => onHover(shapeProps)}
        onDragEnd={(e: any) => {
          onDrag({ id: shapeProps.id, x: e.target.x(), y: e.target.y() })
        }}
        stroke="black"
        onTransformEnd={() => {
          // transformer is changing scale
          const node: any = shapeRef.current
          // const scaleX = node.scaleX()
          // const scaleY = node.scaleY()
          // node.scaleX(1)
          // node.scaleY(1)
          onTransform({
            id: shapeProps.id,
            type: TYPE_SHAPE,
            subType: CIRCLE,
            x: node.x(),
            y: node.y(),
            radius: node.radius(),
          })
        }}
      />
      {isSelected && (
        <Transformer
          anchorSize={10}
          anchorCornerRadius={5}
          anchorStrokeWidth={0.4}
          borderStroke={'#0EA5E9'}
          borderStrokeWidth={0.8}
          ref={trRef}
        />
      )}
      {isHovered && !isSelected && (
        <Transformer
          anchorSize={2}
          anchorCornerRadius={5}
          anchorStrokeWidth={0.4}
          borderStroke={'#0EA5E9'}
          borderStrokeWidth={0.8}
          ref={trRef}
        />
      )}
    </>
  )
}
export default CircleShape
