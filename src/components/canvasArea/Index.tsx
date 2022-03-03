import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Layer, Stage } from 'react-konva'

//
import { useShapeStore } from '../../store/shapes'
import downloadToImage from '../../utils/downloadToImage'
import { useProjectBoardStore } from '../../store/projectBoard'
import { projectBoardSetting } from '../../types/canvas.type'
import { TYPE_SHAPE, TYPE_TEXT } from '../../constants'
import Shapes from './elements/shapes/Index'
import Texts from './elements/texts/Index'
import { useTextStore } from '../../store/text'

// Component props
interface Props {
  boardSetting: projectBoardSetting
}

const CanvasArea: React.FC<Props> = ({ boardSetting }) => {
  //
  // global state - selected element
  const selectedEl = useProjectBoardStore((state) => state.selectedEl)
  const setSelectedElNull = useProjectBoardStore(
    (state) => state.setSelectedElNull
  )
  const setHoveredElNull = useProjectBoardStore(
    (state) => state.setHoveredElNull
  )
  // shape store
  const removeShape = useShapeStore((state) => state.removeShape)
  // text store
  const removeText = useTextStore((state) => state.removeText)

  // handel export to image
  //
  // global state - to check if export to image was clicked and set back to false after export
  const isExportToImage = useProjectBoardStore((state) => state.isExportToImage)
  const setExportToImage = useProjectBoardStore(
    (state) => state.setExportToImage
  )
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
      e.stopPropagation()
      if (e.code === 'Delete') {
        if (selectedEl?.type === TYPE_SHAPE) {
          removeShape(selectedEl.id)
        } else if (selectedEl?.type === TYPE_TEXT) {
          removeText(selectedEl.id)
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
          <Shapes />
          <Texts />
        </Layer>
      </Stage>
    </div>
  )
}

export default CanvasArea
