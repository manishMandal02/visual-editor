import create, { SetState, GetState } from 'zustand'
import { projectBoardSize, selectedElement } from '../types/canvas.type'

interface projectBoardStore {
  name: string
  setName: (name: string) => void
  size: projectBoardSize
  setSize: (size: projectBoardSize) => void
  pixelRatio: number
  isExportToImage: boolean
  setExportToImage: (value: boolean) => void
}

export const useProjectBoardStore = create<projectBoardStore>(
  (set: SetState<projectBoardStore>, get: GetState<projectBoardStore>) => ({
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
