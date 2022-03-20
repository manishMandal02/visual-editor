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
  const { color, size, isApplied } = value
  return (
    <div className="px-2">
      <SwitchWithOptions
        label="Stroke"
        isSwitchOn={isApplied}
        onChange={(value) => {
          onChange({ color, size, isApplied: value })
        }}
      >
        <RangeSlider
          label="Curved Amount"
          value={size}
          onChange={(value) => onChange({ size: value, color, isApplied })}
        />
        <div className="flex select-none items-center justify-between px-4 py-1">
          Color
          <ColorPicker
            selected={color}
            onChange={(color) => {
              onChange({ size, color: color, isApplied })
            }}
          />
        </div>
      </SwitchWithOptions>
    </div>
  )
}
export default React.memo(TextStroke)
