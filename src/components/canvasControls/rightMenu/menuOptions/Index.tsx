import { useRouter } from 'next/router'
import React from 'react'
import ShapesMenu from './ShapesMenu'
import TextMenu from './TextMenu'

const MenuOptions = () => {
  // url query
  const router = useRouter()
  const query = router.query
  return (
    <div className="mt-2 p-3">
      {query?.m === 'shapes' ? (
        <ShapesMenu />
      ) : query?.m === 'text' ? (
        <TextMenu />
      ) : (
        <ShapesMenu />
      )}
    </div>
  )
}

export default MenuOptions
