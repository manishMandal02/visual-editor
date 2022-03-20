import React, { useEffect, useState } from 'react'
import Accordion from './Accordion'
import Switch from './Switch'

interface Props {
  label: string
  isSwitchOn: boolean
  onChange: (value: boolean) => void
}

const SwitchWithOptions: React.FC<Props> = ({
  label,
  children,
  isSwitchOn,
  onChange,
}) => {
  return (
    <>
      <div className="mt-2 w-full py-1 px-2 shadow-sm shadow-slate-700">
        <div className="flex items-center justify-between p-1 px-2 ">
          <p className="select-none tracking-wide text-primary-gray ">
            {label}
          </p>
          <Switch value={isSwitchOn} onChange={() => onChange(!isSwitchOn)} />
        </div>
        {isSwitchOn && (
          <div className=" mt-px mb-1 flex flex-col ">
            <Accordion label="Options">{children}</Accordion>
          </div>
        )}
      </div>
    </>
  )
}

export default SwitchWithOptions
