import React from 'react'
import { MdArrowBackIosNew, MdChevronRight } from 'react-icons/md'
import { useAppStore } from '../../store'

interface Props {
  menu: string
  subMenu?: string
  onMenuClicked?: () => void
  closeBtnDisable?: boolean
}

const RightMenuHeader: React.FC<Props> = ({ menu, subMenu, onMenuClicked }) => {
  const setSelectedMenu = useAppStore((state) => state.setSelectedMenu)
  const setSelectedElNull = useAppStore((state) => state.setSelectedElNull)
  return (
    <div className="flex w-full items-center justify-between border-b-2 border-gray-800 px-2 py-2 ">
      <p className="m-0 cursor-pointer text-xl font-medium tracking-wide text-slate-200 ">
        <span>{!subMenu && menu}</span>
        {subMenu && (
          <span className="flex items-center justify-between">
            <span onClick={onMenuClicked}>{menu}</span>{' '}
            <MdChevronRight className="-mb-px" />
            <span className="-mb-px text-sm font-normal">{subMenu}</span>
          </span>
        )}
      </p>
      <div
        onClick={() => {
          setSelectedMenu(null)
          setSelectedElNull()
        }}
        className="to-primary-second flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-primary-secondary p-2  py-3 "
      >
        <MdArrowBackIosNew className="mr- scale-100 text-gray-300 " />
        <MdArrowBackIosNew className="-ml-2 scale-100 text-gray-300" />
      </div>
    </div>
  )
}

export default RightMenuHeader
