import create, { SetState, GetState } from 'zustand'
import {
  projectBoardSize,
  projectBoardSetting,
  element,
} from '../types/canvas.type'

interface projectBoardStore {
  setting: projectBoardSetting
  isExportToImage: boolean
  selectedEl: element | null
  hoveredEl: element | null
  setName: (name: string) => void
  setSize: (size: projectBoardSize) => void
  setPixelRatio: (value: number) => void
  setExportToImage: (value: boolean) => void
  setSelectedEl: (el: element) => void
  setHoveredEl: (el: element) => void
  setSelectedElNull: () => void
  setHoveredElNull: () => void
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
    hoveredEl: null,
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
    setHoveredEl: (el) => set((state) => ({ ...state, hoveredEl: el })),
    setSelectedElNull: () => set((state) => ({ ...state, selectedEl: null })),
    setHoveredElNull: () => set((state) => ({ ...state, hoveredEl: null })),
  })
)
