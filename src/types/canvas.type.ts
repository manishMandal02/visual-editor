import { CIRCLE, RECTANGLE, TYPE_IMAGE, TYPE_SHAPE } from '../constants'
interface projectBoardSize {
  height: number
  width: number
}

// project Board Types
interface projectBoardSetting {
  name: string
  size: projectBoardSize
  pixelRatio: number
}

// elements

type element = shape | image

// elements - shapes

type shape = circle | rectangle

interface shapeFill {
  color: string
  opacity: number
}

interface shapeBorder extends shapeFill {
  size: number
}

interface shapeProps {
  id: string
  type: typeof TYPE_SHAPE
  x: number
  y: number
  fill: shapeFill
  border: shapeBorder
}

interface circle extends shapeProps {
  subType: typeof CIRCLE
  radius: number
}

interface rectangle extends shapeProps {
  subType: typeof RECTANGLE
  height: number
  width: number
}

type image = {
  id: string
  imageURL: string
  type: typeof TYPE_IMAGE
  subType: typeof TYPE_IMAGE
  x: number
  y: number
  height: number
  width: number
}

export type {
  circle,
  shape,
  element,
  shapeFill,
  shapeBorder,
  rectangle,
  projectBoardSize,
  projectBoardSetting,
}
