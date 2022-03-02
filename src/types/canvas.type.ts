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

type circle = {
  id: string
  type: typeof TYPE_SHAPE
  subType: typeof CIRCLE
  x: number
  y: number
  radius: number
}
type rectangle = {
  id: string
  type: typeof TYPE_SHAPE
  subType: typeof RECTANGLE
  x: number
  y: number
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
  rectangle,
  projectBoardSize,
  projectBoardSetting,
}
