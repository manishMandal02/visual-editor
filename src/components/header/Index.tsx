import React from 'react'
import { useAppStore } from '../../store/index'
import downloadToImage from '../../utils/downloadToImage'

const Header = () => {
  // global state
  const setExportToImage = useAppStore((state) => state.setExportToImage)
  return (
    <div className="flex w-full items-center justify-between py-4 px-6">
      <p className="text-gray-200">
        Note: This app is still in the development stage
      </p>
      <div>
        <button
          onClick={() => setExportToImage(true)}
          className="rounded-3xl bg-primary py-2 px-5 text-sm font-medium tracking-wide transition-all duration-200 hover:bg-sky-400"
        >
          Export
        </button>
      </div>
    </div>
  )
}

export default Header
