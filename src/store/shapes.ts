import create, { SetState, GetState, StoreApi, StateCreator } from 'zustand'
// import { devtools } from 'zustand/middleware'
import produce from 'immer'
import { circle, rectangle } from '../types/canvas.type'

interface circleStore {
  circles: circle[]
  add: (c: circle) => void
  remove: (id: string) => void
  onDrag: (values: { id: string; x: number; y: number }) => void
  onTransform: (values: {
    id: string
    x: number
    y: number
    radius: number
  }) => void
}

const circleStore:
  | StateCreator<circleStore, SetState<circleStore>, GetState<circleStore>, any>
  | StoreApi<circleStore> = (
  set: SetState<circleStore>,
  get: GetState<circleStore>
) => ({
  circles: [],
  add: (circle) =>
    set((state) => ({
      ...state,
      circles: [...state.circles, circle],
    })),
  remove: (id) =>
    set(
      produce((draft: circleStore) => {
        const circleIndex = draft.circles.findIndex((c) => c.id === id)
        draft.circles.splice(circleIndex, 1)
      })
    ),

  onDrag: ({ id, x, y }) =>
    set(
      produce((draft: circleStore) => {
        const circle = draft.circles.find((c) => c.id === id)
        if (circle) {
          circle.x = x
          circle.y = y
        }
      })
    ),
  onTransform: ({ id, x, y, radius }) =>
    set(
      produce((draft: circleStore) => {
        const circle = draft.circles.find((c) => c.id === id)
        if (circle) {
          circle.x = x
          circle.y = y
          circle.radius = radius
        }
      })
    ),
})

interface rectangleStore {
  rectangles: rectangle[]
  add: (c: rectangle) => void
  remove: (id: string) => void
  onDrag: (values: { id: string; x: number; y: number }) => void
  onTransform: (values: {
    id: string
    x: number
    y: number
    width: number
    height: number
  }) => void
}

const rectangleStore:
  | StateCreator<
      rectangleStore,
      SetState<rectangleStore>,
      GetState<rectangleStore>,
      any
    >
  | StoreApi<rectangleStore> = (
  set: SetState<rectangleStore>,
  get: GetState<rectangleStore>
) => ({
  rectangles: [],
  add: (circle) =>
    set((state) => ({
      ...state,
      rectangles: [...state.rectangles, circle],
    })),
  remove: (id) =>
    set(
      produce((draft: rectangleStore) => {
        const rectangleIndex = draft.rectangles.findIndex((r) => r.id === id)
        draft.rectangles.splice(rectangleIndex, 1)
      })
    ),
  onDrag: ({ id, x, y }) =>
    set(
      produce((draft: rectangleStore) => {
        const rectangle = draft.rectangles.find((r) => r.id === id)
        if (rectangle) {
          rectangle.x = x
          rectangle.y = y
        }
      })
    ),
  onTransform: ({ id, x, y, width, height }) =>
    set(
      produce((draft: rectangleStore) => {
        const rectangle = draft.rectangles.find((r) => r.id === id)
        if (rectangle) {
          rectangle.x = x
          rectangle.y = y
          rectangle.width = width
          rectangle.height = height
        }
      })
    ),
})

export const useCircleStore = create<circleStore>(circleStore)
export const useRectangleStore = create<rectangleStore>(rectangleStore)
