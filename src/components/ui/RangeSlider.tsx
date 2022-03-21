import React from 'react'

interface Props {
  id?: string
  label: string
  value: number
  min?: number
  max?: number
  step?: number
  isValueNumber?: boolean
  onChange: (value: number) => void
}

const RangeSlider: React.FC<Props> = ({
  value,
  label,
  onChange,
  id,
  min,
  max,
  step,
  isValueNumber,
}) => {
  return (
    <div key={id}>
      <div className="mt-2 flex w-full flex-col  items-start justify-center p-1 px-2">
        <p className="ml-2 -mb-1  select-none text-sm text-primary-gray">
          {label}
        </p>
        <div className="flex w-full items-center rounded   py-2 px-2 shadow-sm shadow-slate-700">
          <input
            type="range"
            min={min || 0}
            max={max || 100}
            value={value}
            step={step}
            style={{
              backgroundImage: `linear-gradient(90deg, #14b8a6 ${
                (value / (max || 100)) * 100
              }%, transparent ${value}%)`,
            }}
            onChange={(e) => {
              onChange(Number(e.target.value))
            }}
            className="rangeSlideCC h-1.5 w-full cursor-pointer rounded  bg-slate-200 outline-none"
          />
          <div className="relative ml-3 flex w-12 items-center justify-start  rounded bg-slate-100 text-black">
            <input
              type="number"
              value={value}
              min={0}
              max={100}
              onChange={(e) => {
                onChange(Number(e.target.value))
              }}
              className={` ${
                isValueNumber ? 'showArrowCC' : 'hideArrowCC'
              } w-10  rounded bg-slate-100 py-px px-px pl-1 text-left text-sm text-black outline-none`}
            />
            {!isValueNumber && (
              <span className="absolute right-1 select-none text-xs">%</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RangeSlider
