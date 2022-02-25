import { nanoid } from 'nanoid'
import React from 'react'
import dynamic from 'next/dynamic'
import { useCircleStore } from '../../store/canvasShapes'
import { circle } from '../../types/canvas.type'
const Layer = dynamic<any>(
  () => import('react-konva').then((cmp) => cmp.Layer),
  { ssr: false }
)
const Stage = dynamic<any>(
  () => import('react-konva').then((cmp) => cmp.Stage),
  { ssr: false }
)

const CircleShape = dynamic(() => import('./elements/Circle'), { ssr: false })

const CanvasArea = () => {
  const circles = useCircleStore((state) => state.circles)
  const selectedCircle = useCircleStore((state) => state.selected)
  const selectCircle = useCircleStore((state) => state.select)
  const onDragCircle = useCircleStore((state) => state.onDrag)
  const transformCircle = useCircleStore((state) => state.onTransform)

  const selectCircleHandler = (c: circle) => {
    selectCircle(c)
  }

  console.log('selected', selectedCircle)

  const stageClickHandler = () => {
    selectCircle(null)
  }

  return (
    <div className="bg-gray-50 text-gray-100">
      <Stage onClick={stageClickHandler} width={400} height={400}>
        <Layer>
          {circles.map((c) => (
            <CircleShape
              key={c.id}
              shapeProps={{
                x: c.x,
                y: c.y,
                radius: c.radius,
              }}
              isSelected={!!selectedCircle && selectedCircle.id === c.id}
              onSelect={() => {
                selectCircleHandler(c)
              }}
              onTransform={(newAttrs) => {
                transformCircle(newAttrs.x, newAttrs.y, newAttrs.radius)
              }}
              onDrag={(newAttrs) => {
                onDragCircle(newAttrs.x, newAttrs.y)
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

export default CanvasArea
