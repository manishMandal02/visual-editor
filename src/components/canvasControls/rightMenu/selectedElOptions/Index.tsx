import React from 'react'
import { TYPE_IMAGE, TYPE_SHAPE, TYPE_TEXT } from '../../../../constants'
import { element } from '../../../../types/canvas.type'
import ShapeOptions from './ShapeOptions'
import TextOptions from './TextOptions'

interface Props {
  selectedEl: element | null
}

const SelectedElOptions: React.FC<Props> = ({ selectedEl }) => {
  return (
    <>
      {selectedEl?.type === TYPE_SHAPE ? (
        <ShapeOptions selectedEl={selectedEl} />
      ) : selectedEl?.type === TYPE_TEXT ? (
        <TextOptions selectedEl={selectedEl} />
      ) : (
        <p>Others</p>
      )}
    </>
  )
}

export default SelectedElOptions
