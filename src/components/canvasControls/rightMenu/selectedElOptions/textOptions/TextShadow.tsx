import React, { useEffect, useState } from 'react'
import { TextShadow as TextShadowType } from '../../../../../types/canvas.type'
import ColorPicker from '../../../../ui/colorPicker/Index'
import RangeSlider from '../../../../ui/RangeSlider'
//
import SwitchWithOptions from '../../../../ui/SwitchWithOptions'

interface Props {
  value: TextShadowType
  onChange: (value: TextShadowType) => void
}

const TextShadow: React.FC<Props> = ({ value, onChange }) => {
  const { blur, offSetX, offSetY, opacity, color, isApplied } = value

  return (
    <div className="px-2 ">
      <SwitchWithOptions
        label="Shadow"
        isSwitchOn={isApplied}
        onChange={(boolean) => onChange({ ...value, isApplied: boolean })}
      >
        <RangeSlider
          label="Blur"
          value={blur}
          onChange={(newProp) => {
            onChange({ ...value, blur: newProp })
          }}
        />
        <RangeSlider
          label="Opacity"
          value={opacity}
          onChange={(newProp) => {
            onChange({ ...value, opacity: newProp })
          }}
        />
        <RangeSlider
          label="OffSet X"
          value={offSetX}
          onChange={(newProp) => {
            onChange({ ...value, offSetX: newProp })
          }}
        />
        <RangeSlider
          label="OffSet Y"
          value={offSetY}
          onChange={(newProp) => {
            onChange({ ...value, offSetY: newProp })
          }}
        />
        <div className="flex select-none items-center justify-between px-4 py-1">
          Color
          <ColorPicker
            selected={color}
            onChange={(newColor) => {
              onChange({ ...value, color: newColor })
            }}
          />
        </div>
      </SwitchWithOptions>
    </div>
  )
}

export default React.memo(TextShadow)
