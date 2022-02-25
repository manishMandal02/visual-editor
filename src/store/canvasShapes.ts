import create, { SetState, GetState, StoreApi, StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'

import { circle } from '../types/canvas.type'

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
  select: (circle) => {
    const { selected } = get()
    set({ selected: circle })
  },
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
        selected: { ...selected, x: x, y: y, radius: radius },
      })
    }
  },
})

export const useCircleStore = create<circleStore>(devtools(circleStore))
