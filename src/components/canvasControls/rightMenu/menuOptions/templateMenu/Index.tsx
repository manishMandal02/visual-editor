import React, { useState } from 'react'
import RightMenuHeader from '../../../../ui/RightMenuHeader'
import SearchBox from '../../../../ui/SearchBox'

const TemplateMenu = () => {
  const [keyword, setKeyword] = useState('')

  return (
    <div>
      <RightMenuHeader menu="Templates" />
      <>
        <SearchBox
          keyword={keyword}
          onChange={setKeyword}
          onCancel={() => setKeyword('')}
          placeholder="Search all templates"
        />
      </>
    </div>
  )
}

export default TemplateMenu
