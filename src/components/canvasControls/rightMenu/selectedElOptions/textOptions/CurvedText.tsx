import { nanoid } from 'nanoid'
import React from 'react'
import Accordion from '../../../../ui/Accordion'
import RangeSlider from '../../../../ui/RangeSlider'
import SwitchWithOptions from '../../../../ui/SwitchWithOptions'

interface Props {
  value: number
  onChange: (value: number) => void
}

const CurvedText: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="px-2">
      <SwitchWithOptions
        label="Curved Text"
        isSwitchOn={!!value}
        onChange={() => {}}
      >
        <RangeSlider
          id={nanoid()}
          label="Curved Amount"
          value={value}
          onChange={onChange}
        />
      </SwitchWithOptions>
    </div>
  )
}

export default React.memo(CurvedText)
