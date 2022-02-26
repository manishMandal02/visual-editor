import create, { SetState, GetState, StoreApi, StateCreator } from 'zustand'
// import { devtools } from 'zustand/middleware'

import { circle, rectangle } from '../types/canvas.type'

interface circleStore {
  circles: circle[]
  selected: circle | null
  add: (c: circle) => void
  select: (c: circle | null) => void
  onDrag: (x: number, y: number) => void
  onTransform: (x: number, y: number, radius: number) => void
}

const circleStore:
  | StateCreator<circleStore, SetState<circleStore>, GetState<circleStore>, any>
  | StoreApi<circleStore> = (
  set: SetState<circleStore>,
  get: GetState<circleStore>
) => ({
  circles: [],
  selected: null,
  add: (circle) =>
    set((state) => ({
      ...state,
      circles: [...state.circles, circle],
    })),
  select: (circle) => set((state) => ({ ...state, selected: circle })),
  onDrag: (x, y) => {
    const { selected } = get()
    if (!!selected) {
      set({
        selected: { ...selected, x: x, y: y },
      })
    }
  },
  onTransform: (x, y, radius) => {
    const { selected } = get()
    if (!!selected) {
      set({
        selected: { ...selected, x: x, y: y, radius },
      })
    }
  },
})

interface rectangleStore {
  rectangles: rectangle[]
  selected: rectangle | null
  add: (c: rectangle) => void
  select: (c: rectangle | null) => void
  onDrag: (x: number, y: number) => void
  onTransform: (x: number, y: number, height: number, width: number) => void
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
  selected: null,
  add: (circle) =>
    set((state) => ({
      ...state,
      rectangles: [...state.rectangles, circle],
    })),
  select: (circle) => set((state) => ({ ...state, selected: circle })),
  onDrag: (x, y) => {
    const { selected } = get()
    if (!!selected) {
      set({
        selected: { ...selected, x: x, y: y },
      })
    }
  },
  onTransform: (x, y, height, width) => {
    const { selected } = get()
    if (!!selected) {
      set({
        selected: { ...selected, x: x, y: y, height, width },
      })
    }
  },
})

export const useCircleStore = create<circleStore>(circleStore)
export const useRectangleStore = create<rectangleStore>(rectangleStore)
