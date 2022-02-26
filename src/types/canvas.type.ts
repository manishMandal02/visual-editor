interface projectBoardSize {
  height: number
  width: number
}

interface projectBoardSetting {
  name: string
  size: projectBoardSize
  pixelRatio: number
}

interface circle {
  id: string
  type: string
  x: number
  y: number
  radius: number
}
interface rectangle {
  id: string
  type: string
  x: number
  y: number
  height: number
  width: number
}

type elements = circle | rectangle

export type {
  circle,
  elements,
  rectangle,
  projectBoardSize,
  projectBoardSetting,
}
