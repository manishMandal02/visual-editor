import React, { useState } from 'react'
import RightMenuHeader from '../../../../ui/RightMenuHeader'
import SearchBox from '../../../../ui/SearchBox'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import ElementsSearchTags from '../../../../ui/ElementsSearchTags'
import ElementsMiniMenu from '../../../../ui/ElementsMiniMenu'
import { nanoid } from 'nanoid'

const shapesFileRef = [
  '/elements/shapes/circle-outlined.svg',
  '/elements/shapes/circle-filled.svg',
  '/elements/shapes/square-outlined.svg',
  '/elements/shapes/square-filled-rounded.svg',
  // '/elements/shapes/square-filled.svg',
]

const ElementsMenu = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [subMenu, setSubMenu] = useState<string>('')

  const onSelectSearchTag = (tag: string) => {
    setSearchKeyword(tag)
  }

  const ViewAllClickHandler = (menu: string) => {
    setSubMenu(menu)
  }

  return (
    <>
      <RightMenuHeader
        onMenuClicked={() => setSubMenu('')}
        menu={'Elements'}
        subMenu={subMenu}
      />
      {!subMenu ? (
        <>
          <SearchBox
            keyword={searchKeyword}
            onChange={setSearchKeyword}
            onCancel={() => setSearchKeyword('')}
            placeholder="Search all elements"
          />
          <>
            <ElementsSearchTags onSelect={onSelectSearchTag} />
          </>
          <>
            <ElementsMiniMenu
              id={nanoid()}
              heading="Shapes & Lines"
              filePaths={shapesFileRef}
              onViewAllClick={() => ViewAllClickHandler('Shapes')}
            />
            <ElementsMiniMenu
              id={nanoid()}
              heading="Emojis"
              filePaths={shapesFileRef}
              onViewAllClick={() => ViewAllClickHandler('Emojis')}
            />
            <ElementsMiniMenu
              id={nanoid()}
              heading="Icons"
              filePaths={shapesFileRef}
              onViewAllClick={() => ViewAllClickHandler('Icons')}
            />
            <ElementsMiniMenu
              id={nanoid()}
              heading="Stickers"
              filePaths={shapesFileRef}
              onViewAllClick={() => ViewAllClickHandler('Stickers')}
            />
            <ElementsMiniMenu
              id={nanoid()}
              heading="Charts & Tables"
              filePaths={shapesFileRef}
              onViewAllClick={() => ViewAllClickHandler('Charts & Tables')}
            />
          </>
        </>
      ) : (
        <p className="text-white">Submenu</p>
      )}
    </>
  )
}

export default ElementsMenu
