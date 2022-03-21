//
import produce from 'immer'
import { projectBoardSetting, ProjectBoardSize } from '../types/canvas.type'
import { StoreSlice } from '../types/store.types'

interface ProjectBoardSlice {
  setting: projectBoardSetting
  isExportToImage: boolean
  setName: (name: string) => void
  setSize: (size: ProjectBoardSize) => void
  setPixelRatio: (value: number) => void
  setExportToImage: (value: boolean) => void
  selectedMenu: string | null
  setSelectedMenu: (menu: string | null) => void
}

export const createProjectSlice: StoreSlice<ProjectBoardSlice> = (set) => ({
  setting: {
    name: 'untitled',
    size: { height: 540, width: 540 },
    pixelRatio: 3,
  },
  isExportToImage: false,
  setName: (name) => set((state) => ({ ...state, name })),
  setSize: (size) =>
    set((state) => ({
      ...state,
      size: { height: size.height, width: size.width },
    })),
  setPixelRatio: (value) => set((state) => ({ ...state, pixelRatio: value })),

  setExportToImage: (value) =>
    set((state) => ({ ...state, isExportToImage: value })),
  selectedMenu: 'settings',
  setSelectedMenu: (menu) => set((state) => ({ ...state, selectedMenu: menu })),
})
