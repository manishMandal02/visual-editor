import React, { useEffect, useRef } from 'react'
import { Layer, Stage } from 'react-konva'

//
import downloadToImage from '../../utils/downloadToImage'
import { projectBoardSetting } from '../../types/canvas.type'
import { useAppStore } from '../../store'
import Elements from './elements/Index'

// Component props
interface Props {
  boardSetting: projectBoardSetting
}

const CanvasArea: React.FC<Props> = ({ boardSetting }) => {
  //
  // global state - selected element
  const selectedEl = useAppStore((state) => state.selectedEl)
  const setSelectedElNull = useAppStore((state) => state.setSelectedElNull)
  const setHoveredElNull = useAppStore((state) => state.setHoveredElNull)
  const removeElement = useAppStore((state) => state.removeElement)

  // handel export to image
  //
  // global state - to check if export to image was clicked and set back to false after export
  const isExportToImage = useAppStore((state) => state.isExportToImage)
  const setExportToImage = useAppStore((state) => state.setExportToImage)
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
      setSelectedElNull()
      handleExportToImage()
    }
  }, [isExportToImage])

  // deleting selected el on delete keypress
  useEffect(() => {
    const deleteEl = (e: KeyboardEvent) => {
      e.stopPropagation()
      if (e.code === 'Delete') {
        if (selectedEl) {
          removeElement(selectedEl.id)
          setSelectedElNull()
        }
      }
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
          setSelectedElNull()
          setHoveredElNull()
        }}
        dragBoundFunc={() => ({ x: 50, y: 50 })}
        // opacity={1}
        width={boardSetting.size.width}
        height={boardSetting.size.height}
        // className="bg-slate-400"
        ref={stageRef}
      >
        <Layer>
          <Elements />
        </Layer>
      </Stage>
    </div>
  )
}

export default CanvasArea
