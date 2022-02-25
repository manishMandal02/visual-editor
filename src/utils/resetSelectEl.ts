import { useCallback } from 'react'
import { useCircleStore } from '../store/canvasShapes'

const resetSelectEl = () => {
  const selectCircle = useCircleStore((state) => state.select)
  selectCircle(null)
}

export default resetSelectEl
