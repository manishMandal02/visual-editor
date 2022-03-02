import create, { SetState, GetState, StoreApi, StateCreator } from 'zustand'
// import { devtools } from 'zustand/middleware'
import produce from 'immer'
import {
  circle,
  rectangle,
  shape,
  shapeBorder,
  shapeFill,
} from '../types/canvas.type'
import { CIRCLE, RECTANGLE } from '../constants'

interface fillUpdate extends shapeFill {
  id: string
}
interface borderUpdate extends shapeBorder {
  id: string
}

interface shapeStoreType {
  shapes: shape[]
  addShape: (shape: shape) => void
  removeShape: (id: string) => void
  onDrag: (values: { id: string; x: number; y: number }) => void
  onTransform: (shape: shape) => void
  onFillUpdate: (fill: fillUpdate) => void
  onBorderUpdate: (fill: borderUpdate) => void
}

const shapeStore:
  | StateCreator<
      shapeStoreType,
      SetState<shapeStoreType>,
      GetState<shapeStoreType>,
      any
    >
  | StoreApi<shapeStoreType> = (set: SetState<shapeStoreType>) => ({
  shapes: [],
  addShape: (shape) =>
    set((state) => ({ ...state, shapes: [...state.shapes, shape] })),
  removeShape: (id) =>
    set(
      produce((draft: shapeStoreType) => {
        const shapeIndex = draft.shapes.findIndex((s) => s.id === id)
        draft.shapes.splice(shapeIndex, 1)
      })
    ),
  onDrag: ({ id, x, y }) =>
    set(
      produce((draft: shapeStoreType) => {
        const shape = draft.shapes.find((s) => s.id === id)
        shape!.x = x
        shape!.y = y
      })
    ),
  onTransform: (shape) =>
    set(
      produce((draft: shapeStoreType) => {
        const shapeToUpdate = draft.shapes.find((s) => s.id === shape.id)
        shapeToUpdate!.x = shape.x
        shapeToUpdate!.y = shape.y
        if (
          shapeToUpdate &&
          shapeToUpdate.subType === CIRCLE &&
          shape.subType === CIRCLE
        ) {
          shapeToUpdate!.radius = shape.radius
        } else if (
          shapeToUpdate &&
          shapeToUpdate.subType === RECTANGLE &&
          shape.subType === RECTANGLE
        ) {
          shapeToUpdate.width = shape.width
          shapeToUpdate.height = shape.height
        }
      })
    ),
  onFillUpdate: ({ id, color, opacity }) =>
    set(
      produce((draft: shapeStoreType) => {
        const shape = draft.shapes.find((s) => s.id === id)
        shape!.fill.color = color
        shape!.fill.opacity = opacity
      })
    ),
  onBorderUpdate: ({ id, color, opacity, size }) =>
    set(
      produce((draft: shapeStoreType) => {
        const shape = draft.shapes.find((s) => s.id === id)
        shape!.border.color = color
        shape!.border.opacity = opacity
        shape!.border.size = size
      })
    ),
})

export const useShapeStore = create<shapeStoreType>(shapeStore)
