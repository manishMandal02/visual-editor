import { useCallback } from 'react'
import { useCircleStore } from '../store/shapes'

const resetSelectEl = () => {
  const selectCircle = useCircleStore((state) => state.select)
  selectCircle(null)
}

export default resetSelectEl
