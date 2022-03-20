import React, { useState } from 'react'

import { FiChevronUp } from 'react-icons/fi'

interface Props {
  label: string
}

const Accordion: React.FC<Props> = ({ children, label }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-px mb-1 flex w-full flex-col rounded-sm shadow-sm shadow-slate-700">
      {/* <div className="mt-px mb-1 flex w-full flex-col rounded-sm border border-slate-700 opacity-80"> */}
      <div
        className={` flex cursor-pointer select-none items-center  justify-between rounded-sm ${
          open && 'border-b  border-slate-600'
        }  p-1.5 py-2 `}
        onClick={() => setOpen(!open)}
      >
        <p className="text-sm text-primary-gray ">{label}</p>
        <span
          className={`scale-125 font-medium transition-all duration-300   ${
            !open && 'rotate-180'
          } transition-all duration-200  `}
        >
          <FiChevronUp />
        </span>
      </div>
      <div className={` py-1  ${open ? 'block' : 'hidden'}`}>{children}</div>
    </div>
  )
}

export default Accordion
