import {
  CIRCLE,
  RECTANGLE,
  TYPE_IMAGE,
  TYPE_SHAPE,
  TYPE_TEXT,
} from '../constants'

// project Board Types
interface projectBoardSetting {
  name: string
  size: ProjectBoardSize
  pixelRatio: number
}
interface ProjectBoardSize {
  height: number
  width: number
}

// elements

type Element = Shape | Image | Text

// elements - shapes

type Shape = Circle | Rectangle

interface ShapeStyle {
  fillColor: string
  strokeColor: string
  strokeWidth: number
}

interface ShapeProps {
  id: string
  type: typeof TYPE_SHAPE
  x: number
  y: number
  style: ShapeStyle
  height: number
  width: number
}

interface Circle extends ShapeProps {
  subType: typeof CIRCLE
}

interface Rectangle extends ShapeProps {
  subType: typeof RECTANGLE
}

// element - text
interface Text {
  id: string
  type: typeof TYPE_TEXT
  subType: typeof TYPE_TEXT
  text: string
  x: number
  y: number
  width: number
  height: number
  style: TextStyle
}
interface TextStyle {
  color: string
  opacity: number
  fontSize: number
  font: string
  align: TextAlign
  alignVertical: TextAlignVertical
  lineHeight: number
}

type TextAlign = 'left' | 'center' | 'right'
type TextAlignVertical = 'top' | 'middle' | 'bottom'

// element - image
type Image = {
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
  Circle,
  Shape,
  Text,
  TextStyle,
  TextAlign,
  TextAlignVertical,
  Element,
  ShapeStyle,
  Rectangle,
  ProjectBoardSize,
  projectBoardSetting,
}
