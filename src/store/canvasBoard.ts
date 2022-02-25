import create, { SetState, GetState } from 'zustand'
import { selectedElement } from '../types/canvas.type'

interface canvasBoardStore {
  selectedEl: selectedElement | null
  selectEl: (el: selectedElement) => void
}

export const useCanvasStore = create<canvasBoardStore>(
  (set: SetState<canvasBoardStore>, get: GetState<canvasBoardStore>) => ({
    selectedEl: null,
    selectEl: (el) => {
      const { selectedEl } = get()
      set({ selectedEl: el })
    },
  })
)
