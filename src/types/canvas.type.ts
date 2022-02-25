// interface shapeProps {
//   x: number
//   y: number
//   height: number
//   width: number
//   radius: number
// }

interface circle {
  id?: string
  x: number
  y: number
  radius: number
}
interface rectangle {
  id?: string
  x: number
  y: number
  height: number
  width: number
}

type selectedElement = circle | rectangle

export type { circle, selectedElement, rectangle }
