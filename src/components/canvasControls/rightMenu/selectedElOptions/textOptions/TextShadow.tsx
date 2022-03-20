import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { TextShadow as TextShadowType } from '../../../../../types/canvas.type'
import Accordion from '../../../../ui/Accordion'
import ColorPicker from '../../../../ui/colorPicker/Index'
import RangeSlider from '../../../../ui/RangeSlider'
//
import Switch from '../../../../ui/Switch'
import SwitchWithOptions from '../../../../ui/SwitchWithOptions'

interface Props {
  value: TextShadowType
  onChange: (value: TextShadowType) => void
}

const TextShadow: React.FC<Props> = ({ value, onChange }) => {
  const [isStrokeApplied, setIsStrokeApplied] = useState(false)

  const { blur, offSetX, offSetY, opacity, color } = value

  useEffect(() => {
    if (size > 0) {
      setIsStrokeApplied(true)
    } else {
      setIsStrokeApplied(false)
    }
  }, [size])
  return (
    <div className="px-2 ">
      <SwitchWithOptions
        label="Shadow"
        isSwitchOn={isStrokeApplied}
        onChange={setIsStrokeApplied}
      >
        <RangeSlider id={nanoid()} label="Blur" value={0} onChange={() => {}} />
        <RangeSlider
          id={nanoid()}
          label="Opacity"
          value={0}
          onChange={() => {}}
        />
        <RangeSlider
          id={nanoid()}
          label="OffSet X"
          value={0}
          onChange={() => {}}
        />
        <RangeSlider
          id={nanoid()}
          label="OffSet Y"
          value={0}
          onChange={() => {}}
        />
        <div className="flex select-none items-center justify-between px-4 py-1">
          Color
          <ColorPicker selected="#000000" onChange={() => {}} />
        </div>
      </SwitchWithOptions>
    </div>
  )
}

export default React.memo(TextShadow)
