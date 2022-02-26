import create, { SetState, GetState } from 'zustand'
import { canvasSize, selectedElement } from '../types/canvas.type'

interface canvasBoardStore {
  name: string
  setName: (name: string) => void
  size: canvasSize
  setSize: (size: canvasSize) => void
  pixelRatio: number
  isExportToImage: boolean
  setExportToImage: (value: boolean) => void
}

export const useCanvasStore = create<canvasBoardStore>(
  (set: SetState<canvasBoardStore>, get: GetState<canvasBoardStore>) => ({
    name: 'untitled',
    setName: (name) => set((state) => ({ ...state, name })),
    size: { height: 360, width: 360 },
    pixelRatio: 3,
    setSize: (size) =>
      set((state) => ({
        ...state,
        size: { height: size.height, width: size.width },
      })),
    isExportToImage: false,
    setExportToImage: (value) =>
      set((state) => ({ ...state, isExportToImage: value })),
  })
)
