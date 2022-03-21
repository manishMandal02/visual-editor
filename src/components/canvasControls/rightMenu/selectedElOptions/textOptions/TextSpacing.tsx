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
          label="Letter Spacing"
          value={letter}
          min={0}
          max={20}
          isValueNumber
          step={0.5}
          onChange={(value) => {
            onChange({ letter: value, line })
          }}
        />
        <RangeSlider
          label="Line Spacing"
          value={line}
          min={0.1}
          max={5}
          isValueNumber
          step={0.1}
          onChange={(value) => {
            onChange({ line: value, letter })
          }}
        />
      </Accordion>
    </div>
  )
}

export default React.memo(TextSpacing)
