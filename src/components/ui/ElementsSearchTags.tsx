import React from 'react'

interface Props {
  onSelect: (tag: string) => void
}

const searchTags = [
  'Circle',
  'Square',
  'Rectangle',
  'Emoji',
  'Shapes',
  'Line',
  'Arrow',
]

const ElementsSearchTags: React.FC<Props> = ({ onSelect }) => {
  return (
    <>
      <div className=" relative mt-1 flex w-full items-center justify-evenly  overflow-hidden text-gray-400">
        {/* <span className=" left-0 flex h-full cursor-pointer items-center justify-center text-slate-300 ">
          <MdChevronLeft className="scale-125" />
        </span> */}
        <div className="-ml-2 flex scroll-m-1 items-center justify-start overflow-hidden overflow-x-scroll px-1 pb-1">
          {searchTags.map((tag) => (
            <p
              key={tag}
              onClick={() => {
                onSelect(tag)
              }}
              className="ml-1 cursor-pointer rounded-full border border-slate-500 px-2 text-sm"
            >
              {tag}
            </p>
          ))}
        </div>

        {/* <span className=" right-0 flex h-full cursor-pointer items-center justify-center text-slate-300 ">
          <MdChevronRight className="text-2xl" />
        </span> */}
      </div>
    </>
  )
}

export default ElementsSearchTags
