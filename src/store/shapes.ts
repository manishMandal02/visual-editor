import create, { SetState, GetState, StoreApi, StateCreator } from 'zustand'
// import { devtools } from 'zustand/middleware'
import produce from 'immer'
import { circle, rectangle, shape } from '../types/canvas.type'
import { CIRCLE, RECTANGLE } from '../constants'

interface shapeStoreType {
  shapes: shape[]
  addShape: (shape: shape) => void
  removeShape: (id: string) => void
  onDrag: (values: { id: string; x: number; y: number }) => void
  onTransform: (shape: shape) => void
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
        const shape = draft.shapes.find((c) => c.id === id)
        shape!.x = x
        shape!.y = y
      })
    ),
  onTransform: (shape) =>
    set(
      produce((draft: shapeStoreType) => {
        const shapeToUpdate = draft.shapes.find((c) => c.id === shape.id)
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
})

export const useShapeStore = create<shapeStoreType>(shapeStore)
