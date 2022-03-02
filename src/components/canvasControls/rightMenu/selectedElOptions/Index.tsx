import React from 'react'
import { TYPE_IMAGE, TYPE_SHAPE } from '../../../../constants'
import { element } from '../../../../types/canvas.type'
import ShapeOptions from './ShapeOptions'

interface Props {
  selectedEl: element | null
}

const SelectedElOptions: React.FC<Props> = ({ selectedEl }) => {
  return (
    <>
      {selectedEl?.type === TYPE_SHAPE ? (
        <ShapeOptions selectedEl={selectedEl} />
      ) : (
        <p>Others</p>
      )}
    </>
  )
}

export default SelectedElOptions
