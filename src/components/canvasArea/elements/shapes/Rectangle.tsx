import { KonvaEventObject } from 'konva/lib/Node'
import React, { useEffect, useRef, useState } from 'react'
import { Rect, Transformer } from 'react-konva'
//
import { RECTANGLE, TYPE_SHAPE } from '../../../../constants'
import { useProjectBoardStore } from '../../../../store/projectBoard'
import { useShapeStore } from '../../../../store/shapes'
import { element, rectangle } from '../../../../types/canvas.type'

interface Props {
  shapeProps: rectangle
  isSelected: boolean
  isHovered: boolean
  onClick: (el: element) => void
  onHover: (el: element) => void
  onDrag: (value: { id: string; x: number; y: number }) => void
  onTransform: (circle: rectangle) => void
  onHoverEnd: () => void
}

const RectangleShape: React.FC<Props> = ({
  shapeProps,
  isHovered,
  isSelected,
  onClick,
  onDrag,
  onHover,
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
  return (
    <>
      <Rect
        onClick={(evt: KonvaEventObject<MouseEvent>) => {
          evt.cancelBubble = true
          onClick(shapeProps)
        }}
        ref={shapeRef}
        x={shapeProps.x}
        y={shapeProps.y}
        width={shapeProps.width}
        height={shapeProps.height}
        draggable
        onMouseOver={() => onHover(shapeProps)}
        onMouseLeave={() => onHoverEnd()}
        onDragStart={() => onHover(shapeProps)}
        onDragEnd={(e: any) => {
          onDrag({
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
          onTransform({
            id: shapeProps.id,
            type: TYPE_SHAPE,
            subType: RECTANGLE,
            x: node.x(),
            y: node.y(),
            height: node.height(),
            width: node.width(),
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
          anchorSize={0}
          anchorCornerRadius={5}
          anchorStrokeWidth={0.4}
          borderStroke={'#0EA5E9'}
          borderStrokeWidth={1}
          ref={trRef}
        />
      )}
    </>
  )
}

export default RectangleShape