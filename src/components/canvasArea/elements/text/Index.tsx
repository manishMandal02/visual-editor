import React, { useRef, useEffect } from 'react'
import { KonvaEventObject } from 'konva/lib/Node'
import { Transformer, Text } from 'react-konva'
//
import {
  Circle,
  Element,
  Text as TextType,
} from '../../../../types/canvas.type'
import hexToRGBA from '../../../../utils/common'

interface Props {
  shapeProps: TextType
  isSelected: boolean
  isHovered: boolean
  onClick: (el: Element) => void
  onHover: (el: Element) => void
  onDrag: (value: { id: string; x: number; y: number }) => void
  onTransform: (circle: TextType) => void
  onHoverEnd: () => void
}

const TextElement: React.FC<Props> = ({
  shapeProps,
  isSelected,
  isHovered,
  onHover,
  onClick,
  onDrag,
  onTransform,
  onHoverEnd,
}) => {
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

  const textProps = { ...shapeProps.style }

  const fillColorWithOpacity = hexToRGBA(
    textProps.color,
    textProps.opacity / 100
  )

  return (
    <>
      <Text
        onClick={(evt: KonvaEventObject<MouseEvent>) => {
          evt.cancelBubble = true
          onClick(shapeProps)
        }}
        ref={shapeRef}
        x={shapeProps.x}
        y={shapeProps.y}
        text={shapeProps.text}
        fontSize={textProps.fontSize}
        fontFamily={textProps.fontFamily}
        align={textProps.align}
        verticalAlign={'middle'}
        lineHeight={textProps.lineHeight}
        fill={fillColorWithOpacity}
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
          })
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          anchorSize={10}
          anchorCornerRadius={5}
          anchorStrokeWidth={0.4}
          borderStroke={'#0EA5E9'}
          borderStrokeWidth={0.8}
          padding={3}
        />
      )}
      {isHovered && !isSelected && (
        <Transformer
          anchorSize={0}
          anchorCornerRadius={5}
          anchorStrokeWidth={0.4}
          borderStroke={'#0EA5E9'}
          borderStrokeWidth={1}
          padding={3}
          ref={trRef}
        />
      )}
    </>
  )
}

export default TextElement
