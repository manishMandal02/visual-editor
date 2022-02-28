import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { useCircleStore, useRectangleStore } from '../../store/shapes'

import { Layer, Stage } from 'react-konva'
import downloadToImage from '../../utils/downloadToImage'
import { useProjectBoardStore } from '../../store/projectBoard'
import { projectBoardSetting } from '../../types/canvas.type'
import RectangleShape from './elements/Rectangle'
import { CIRCLE, RECTANGLE } from '../../Constants'

const CircleShape = dynamic(() => import('./elements/Circle'), { ssr: false })

// Component props
interface Props {
  boardSetting: projectBoardSetting
}

const CanvasArea: React.FC<Props> = ({ boardSetting }) => {
  // global state - to check if export to image was clicked and set back to false after export
  const isExportToImage = useProjectBoardStore((state) => state.isExportToImage)
  const setExportToImage = useProjectBoardStore(
    (state) => state.setExportToImage
  )
  // global state - project board
  const resetSelectedEl = useProjectBoardStore(
    (state) => state.setSelectedElNull
  )
  const selectedEl = useProjectBoardStore((state) => state.selectedEl)
  // global state - circle store
  const circles = useCircleStore((state) => state.circles)
  const removeCircle = useCircleStore((state) => state.remove)

  // global state - rectangle store
  const rectangles = useRectangleStore((state) => state.rectangles)
  const removeRectangle = useRectangleStore((state) => state.remove)

  // handel export to image
  const stageRef = useRef<any>(null)

  const handleExportToImage = () => {
    const uri: string = stageRef?.current.toDataURL({
      pixelRatio: boardSetting.pixelRatio,
    })
    downloadToImage(uri, `${boardSetting.name}.jpg`)
  }
  useEffect(() => {
    if (isExportToImage) {
      setExportToImage(false)
      handleExportToImage()
    }
  }, [isExportToImage])

  // deleting selected el on delete keypress
  useEffect(() => {
    const deleteEl = (e: KeyboardEvent) => {
      if (e.code === 'Delete') {
        console.log(selectedEl?.type)
        if (selectedEl?.type === CIRCLE) {
          removeCircle(selectedEl.id)
        } else if (selectedEl?.type === RECTANGLE) {
          removeRectangle(selectedEl.id)
        }
      }
      resetSelectedEl()
    }
    document.addEventListener('keydown', deleteEl)

    return () => document.removeEventListener('keydown', deleteEl)
  }, [selectedEl])

  return (
    <div className="bg-gray-50 " onClick={(e) => e.stopPropagation()}>
      <Stage
        // scale={{ x: 1, y: 1 }}
        onClick={(e) => {
          e.cancelBubble = true
          resetSelectedEl()
        }}
        // opacity={1}
        width={boardSetting.size.width}
        height={boardSetting.size.height}
        className="bg-slate-400"
        ref={stageRef}
      >
        <Layer>
          {circles.map((c) => (
            <CircleShape
              key={c.id}
              shapeProps={{
                id: c.id,
                type: c.type,
                x: c.x,
                y: c.y,
                radius: c.radius,
              }}
            />
          ))}
          {rectangles.map((r) => (
            <RectangleShape
              key={r.id}
              shapeProps={{
                id: r.id,
                x: r.x,
                type: r.type,
                y: r.y,
                height: r.height,
                width: r.width,
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

export default CanvasArea
