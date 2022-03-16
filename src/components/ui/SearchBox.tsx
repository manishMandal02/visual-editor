import React from 'react'

import { CgSearch, CgClose } from 'react-icons/cg'

interface Props {
  placeholder: string
  keyword: string
  onChange: (keyword: string) => void
  onCancel: () => void
}

const SearchBox: React.FC<Props> = ({
  keyword,
  onChange,
  onCancel,
  placeholder,
}) => {
  return (
    <div className="flex w-full cursor-text items-center justify-start rounded-sm bg-slate-200 px-2">
      <CgSearch className=" text-xl text-slate-800 transition-all duration-200 " />
      <input
        onChange={(e) => {
          onChange(e.target.value)
        }}
        value={keyword}
        type="text"
        placeholder={placeholder}
        className="w-full appearance-none bg-transparent p-2 text-black outline-none placeholder:text-sm"
      />
      {keyword && (
        <CgClose
          className=" cursor-pointer text-xl text-slate-600  transition-all duration-200 "
          onClick={onCancel}
        />
      )}
    </div>
  )
}

export default SearchBox
