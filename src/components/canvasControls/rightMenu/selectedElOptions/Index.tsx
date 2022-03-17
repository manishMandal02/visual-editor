import React from 'react'
import { TYPE_IMAGE, TYPE_SHAPE, TYPE_TEXT } from '../../../../constants'
import { Element } from '../../../../types/canvas.type'
import ElementOptions from './elementOptions/Index'
import ShapeOptions from './elementOptions/Index'
import TextOptions from './textOptions/Index'

interface Props {
  selectedEl: Element | null
}

const SelectedElOptions: React.FC<Props> = ({ selectedEl }) => {
  return (
    <>
      {selectedEl?.type === TYPE_SHAPE ? (
        <ElementOptions selectedEl={selectedEl} />
      ) : selectedEl?.type === TYPE_TEXT ? (
        <TextOptions selectedEl={selectedEl} />
      ) : (
        <p>Others</p>
      )}
    </>
  )
}

export default SelectedElOptions
