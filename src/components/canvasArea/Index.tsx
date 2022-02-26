import { nanoid } from 'nanoid'
import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { useCircleStore, useRectangleStore } from '../../store/shapes'

import { Layer, Stage } from 'react-konva'
import downloadToImage from '../../utils/downloadToImage'
import { useProjectBoardStore } from '../../store/projectBoard'
import { projectBoardSize } from '../../types/canvas.type'
import RectangleShape from './elements/Rectangle'

const CircleShape = dynamic(() => import('./elements/Circle'), { ssr: false })

// Component props
interface Props {
  size: projectBoardSize
}

const CanvasArea: React.FC<Props> = ({ size }) => {
  // global state - to check if export to image was clicked and set back to false after export
  const isExportToImage = useProjectBoardStore((state) => state.isExportToImage)
  const setExportToImage = useProjectBoardStore(
    (state) => state.setExportToImage
  )

  // global state -  getting canvas setup info
  const projectName = useProjectBoardStore((state) => state.name)
  const pixelRatio = useProjectBoardStore((state) => state.pixelRatio)

  // circle
  const circles = useCircleStore((state) => state.circles)
  const selectCircle = useCircleStore((state) => state.select)

  // rectangle
  const rectangles = useRectangleStore((state) => state.rectangles)
  const selectRectangle = useRectangleStore((state) => state.select)

  const stageRef = useRef<any>(null)

  // handel export to image
  const handleExportToImage = () => {
    const uri: string = stageRef?.current.toDataURL({ pixelRatio })
    downloadToImage(uri, `${projectName}.jpg`)
  }

  useEffect(() => {
    if (isExportToImage) {
      setExportToImage(false)
      handleExportToImage()
    }
  }, [isExportToImage])

  return (
    <div className="bg-gray-50 ">
      <Stage
        // scale={{ x: 1, y: 1 }}
        onClick={() => selectCircle(null)}
        // opacity={1}
        width={size.width}
        height={size.height}
        className="bg-slate-400"
        ref={stageRef}
      >
        <Layer>
          {circles.map((c) => (
            <CircleShape
              key={c.id}
              shapeProps={{
                id: c.id,
                x: c.x,
                y: c.y,
                radius: c.radius,
              }}
            />
          ))}
          {rectangles.map((c) => (
            <RectangleShape
              key={c.id}
              shapeProps={{
                id: c.id,
                x: c.x,
                y: c.y,
                height: c.height,
                width: c.width,
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

export default CanvasArea
