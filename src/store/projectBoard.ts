import create, { SetState, GetState } from 'zustand'
import {
  projectBoardSize,
  projectBoardSetting,
  elements,
} from '../types/canvas.type'

interface projectBoardStore {
  setting: projectBoardSetting
  isExportToImage: boolean
  selectedEl: elements | null
  setName: (name: string) => void
  setSize: (size: projectBoardSize) => void
  setPixelRatio: (value: number) => void
  setExportToImage: (value: boolean) => void
  setSelectedEl: (el: elements) => void
  setSelectedElNull: () => void
}

export const useProjectBoardStore = create<projectBoardStore>(
  (set: SetState<projectBoardStore>) => ({
    setting: {
      name: 'untitled',
      size: { height: 360, width: 360 },
      pixelRatio: 3,
    },
    isExportToImage: false,
    selectedEl: null,
    setName: (name) => set((state) => ({ ...state, name })),
    setSize: (size) =>
      set((state) => ({
        ...state,
        size: { height: size.height, width: size.width },
      })),
    setPixelRatio: (value) => set((state) => ({ ...state, pixelRatio: value })),

    setExportToImage: (value) =>
      set((state) => ({ ...state, isExportToImage: value })),
    setSelectedEl: (el) => set((state) => ({ ...state, selectedEl: el })),
    setSelectedElNull: () => set((state) => ({ ...state, selectedEl: null })),
  })
)
