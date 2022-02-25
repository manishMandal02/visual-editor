import { KonvaEventObject } from 'konva/lib/Node'
import dynamic from 'next/dynamic'
import React, { useRef, useEffect, LegacyRef } from 'react'
import { Transformer, Circle } from 'react-konva'

// const Circle = dynamic<any>(
//   () => import('react-konva').then((cmp) => cmp.Circle),
//   { ssr: false }
// )
// const Transformer = dynamic<TransformerType>(
//   () => import('react-konva').then((cmp) => cmp.Transformer),
//   { ssr: false }
// )
import { circle } from '../../../types/canvas.type'

interface Props {
  shapeProps: circle
  isSelected: boolean
  onSelect: () => void
  onDrag: ({}: { x: number; y: number }) => void
  onTransform: ({}: { x: number; y: number; radius: number }) => void
}

const CircleShape: React.FC<Props> = ({
  shapeProps,
  isSelected,
  onSelect,
  onDrag,
  onTransform,
}) => {
  const shapeRef = useRef(null)
  const trRef = useRef<any>(null)
  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current])
      trRef.current.getLayer().batchDraw()
    }
  }, [isSelected])

  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (shapeRef.current && !shapeRef.current.contains(e.target)) {
  //       onClickOutside && onClickOutside()
  //     }
  //   }
  //   document.addEventListener('click', handleClickOutside, true)
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true)
  //   }
  // }, [])

  return (
    <>
      <Circle
        onClick={(evt: KonvaEventObject<MouseEvent>) => {
          evt.cancelBubble = true
          onSelect()
        }}
        ref={shapeRef}
        x={shapeProps.x}
        y={shapeProps.y}
        radius={shapeProps.radius}
        draggable
        onDragStart={onSelect}
        onDragEnd={(e: any) => {
          onDrag({
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
