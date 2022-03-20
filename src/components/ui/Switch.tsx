import React from 'react'

interface Props {
  value: boolean
  onChange: (value: boolean) => void
}

const Switch: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="relative  h-5 w-10 cursor-pointer ">
      <div
        className={`  h-full  w-full cursor-pointer rounded-full bg-slate-400 transition-all duration-300 ${
          value && 'bg-primary'
        }`}
        onClick={() => onChange(!value)}
      >
        <div
          className={`absolute -top-0 h-5 w-5 rounded-full bg-gray-50 transition-all duration-300 ${
            value ? 'translate-x-5' : 'translate-x-0'
          } `}
        ></div>
      </div>
    </div>
  )
}

export default React.memo(Switch)
