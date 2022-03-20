import { nanoid } from 'nanoid'
import React from 'react'
import { TextSpacing as TextSpacingType } from '../../../../../types/canvas.type'
import Accordion from '../../../../ui/Accordion'
import RangeSlider from '../../../../ui/RangeSlider'

interface Props {
  spacing: TextSpacingType
  onChange: (value: TextSpacingType) => void
}

const TextSpacing: React.FC<Props> = ({ spacing, onChange }) => {
  const { letter, line } = spacing
  return (
    <div className=" px-2">
      <Accordion label="Spacing">
        <RangeSlider
          id={nanoid()}
          label="Letter Spacing"
          value={letter}
          onChange={(value) => {
            onChange({ letter: value, line })
          }}
        />
        <RangeSlider
          id={nanoid()}
          label="Line Spacing"
          value={line}
          onChange={(value) => {
            onChange({ line: value, letter })
          }}
        />
      </Accordion>
    </div>
  )
}

export default React.memo(TextSpacing)
