import { useRouter } from 'next/router'
import React from 'react'
import Shapes from './ShapesMenu'

const MenuOptions = () => {
  // url query
  const router = useRouter()
  const query = router.query
  return (
    <div>
      {query?.m === 'shapes' ? (
        <Shapes />
      ) : query?.m === 'text' ? (
        <p>text</p>
      ) : (
        <p>settings</p>
      )}
    </div>
  )
}

export default MenuOptions
