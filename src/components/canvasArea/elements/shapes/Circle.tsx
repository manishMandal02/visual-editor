import { KonvaEventObject } from 'konva/lib/Node'
import React, { useRef, useEffect } from 'react'
import { Transformer, Circle } from 'react-konva'
//
import { Circle as CircleType, Element } from '../../../../types/canvas.type'

interface Props {
  shapeProps: CircleType
  isSelected: boolean
  isHovered: boolean
  onClick: (el: Element) => void
  onHover: (el: Element) => void
  onDrag: (value: { id: string; x: number; y: number }) => void
  onTransform: (circle: CircleType) => void
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

  // transform anchors
  const anchors = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

  return (
    <>
      <Circle
        onClick={(evt: KonvaEventObject<MouseEvent>) => {
          evt.cancelBubble = true
          onClick(shapeProps)
        }}
        fill={shapeProps.style.fillColor}
        stroke={shapeProps.style.strokeColor}
        strokeWidth={shapeProps.style.strokeWidth}
        onMouseOver={() => onHover(shapeProps)}
        onMouseLeave={() => onHoverEnd()}
        ref={shapeRef}
        x={shapeProps.x}
        y={shapeProps.y}
        // radius={shapeProps.radius}
        height={shapeProps.height}
        width={shapeProps.width}
        draggable
        onDragStart={() => onHover(shapeProps)}
        onDragEnd={(e: any) => {
          onDrag({
            id: shapeProps.id,

            x: e.target.x(),
            y: e.target.y(),
          })
        }}
        onTransformEnd={() => {
          // transformer is changing scale
          const node: any = shapeRef.current
          const scaleX = node.scaleX()
          const scaleY = node.scaleY()
          node.scaleX(1)
          node.scaleY(1)
          onTransform({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
            // radius: node.radius(),
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
          enabledAnchors={anchors}
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
