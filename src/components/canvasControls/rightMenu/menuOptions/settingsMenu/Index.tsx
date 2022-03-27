import React, { useEffect, useState } from 'react'
import { useAppStore } from '../../../../../store'
import RightMenuHeader from '../../../../ui/RightMenuHeader'

const SettingsMenu = () => {
  // Global state
  const appSetting = useAppStore((state) => state.setting)
  // Local state
  const [width, setWidth] = useState(1080)
  const [height, setHeight] = useState(1080)

  // Canvas size
  const { size } = appSetting

  // useEffect(() => {
  //   setWidth(size.width)
  //   setHeight(size.height)
  // }, [])

  return (
    <>
      <RightMenuHeader menu="Project Settings" />
      <div className="p-2.5  text-primary-gray">
        <p className="text-lg  tracking-wide">Size</p>
        <div className="mt-2 flex w-full items-center justify-center rounded border border-slate-800 py-2.5">
          <div className="mt-1.5 flex items-center">
            <p className="text-base text-slate-100">W</p>
            <input
              type="number"
              className="hideArrowCC ml-1 w-16 appearance-none rounded-sm px-1.5 py-1 text-sm text-slate-900 outline-none"
              value={width}
              readOnly
              onClick={(e) => {
                // setWidth(Number(e.currentTarget.value))
              }}
            />
          </div>
          <div className="mx-4 -mb-1 text-lg font-medium text-slate-300 ">
            x
          </div>
          <div className="mt-1.5 flex items-center">
            <p className="text-base text-slate-100">H</p>
            <input
              type="number"
              className="hideArrowCC ml-1 w-16 appearance-none rounded-sm px-1.5  py-1 text-sm text-slate-900 outline-none"
              value={height}
              readOnly
              onClick={(e) => {
                // setWidth(Number(e.currentTarget.value))
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsMenu
