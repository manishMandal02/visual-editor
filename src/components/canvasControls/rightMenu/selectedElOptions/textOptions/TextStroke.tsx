import { nanoid } from 'nanoid'
import React from 'react'
import { TextStroke as TextStrokeType } from '../../../../../types/canvas.type'
import ColorPicker from '../../../../ui/colorPicker/Index'
import RangeSlider from '../../../../ui/RangeSlider'
import SwitchWithOptions from '../../../../ui/SwitchWithOptions'

interface Props {
  value: TextStrokeType
  onChange: (value: TextStrokeType) => void
}

const TextStroke: React.FC<Props> = ({ value, onChange }) => {
  const { color, size } = value
  return (
    <div className="px-2">
      <SwitchWithOptions
        label="Curved Text"
        isSwitchOn={!!size}
        onChange={() => {}}
      >
        <RangeSlider
          id={nanoid()}
          label="Curved Amount"
          value={size}
          onChange={(value) => onChange({ size: value, color })}
        />
        <div className="flex select-none items-center justify-between px-4 py-1">
          Color
          <ColorPicker selected={color} onChange={() => {}} />
        </div>
      </SwitchWithOptions>
    </div>
  )
}
export default React.memo(TextStroke)
