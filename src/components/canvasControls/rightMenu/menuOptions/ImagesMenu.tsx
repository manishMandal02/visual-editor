import React, { useState } from 'react'
import RightMenuHeader from '../../../ui/RightMenuHeader'
import SearchBox from '../../../ui/SearchBox'

const ImagesMenu = () => {
  const [keyword, setKeyword] = useState('')
  return (
    <div>
      <RightMenuHeader menu="Images" />
      <>
        <SearchBox
          keyword={keyword}
          onChange={setKeyword}
          onCancel={() => {
            setKeyword('')
          }}
          placeholder="Search for images"
        />
      </>
    </div>
  )
}

export default ImagesMenu
