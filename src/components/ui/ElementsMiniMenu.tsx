import React from 'react'

interface Props {
  id: string
  heading: string
  filePaths: string[]
  onViewAllClick: () => void
}

const ElementsMiniMenu: React.FC<Props> = ({
  id,
  filePaths,
  heading,
  onViewAllClick,
}) => {
  return (
    <>
      <div key={id} className="p-2 text-slate-200">
        <div className="flex items-center justify-between text-sm">
          <p>{heading}</p>
          <p
            className=" scale-90 cursor-pointer text-xs opacity-70"
            onClick={onViewAllClick}
          >
            View all
          </p>
        </div>
        <div className="mt-1 flex w-full justify-evenly">
          {filePaths.map((file) => (
            <div
              key={file}
              className="flex h-14 w-14 cursor-pointer items-center justify-center rounded bg-slate-400"
            >
              <img src={file} className=" h-10 w-10" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ElementsMiniMenu
