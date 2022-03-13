import create, { SetState, GetState, StoreApi, StateCreator } from 'zustand'
// import { devtools } from 'zustand/middleware'
import produce from 'immer'
import { TextStyle, Text } from '../types/canvas.type'
import { ElementsSlice, StoreSlice } from '../types/store.types'
import { TYPE_TEXT } from '../constants'

export const createElementsSlice: StoreSlice<ElementsSlice> = (set, get) => ({
  elements: [],
  selectedEl: null,
  hoveredEl: null,
  onDragEl: (value) =>
    set(
      produce((draft: ElementsSlice) => {
        const elementToUpdate = draft.elements.find(
          (element) => element.id === value.id
        )
        elementToUpdate!.x = value.x
        elementToUpdate!.y = value.y
      })
    ),
  onTransformEl: (value) =>
    set(
      produce((draft: ElementsSlice) => {
        const elementToUpdate = draft.elements.find(
          (element) => element.id === value.id
        )
        elementToUpdate!.x = value.x
        elementToUpdate!.y = value.y
        elementToUpdate!.width = value.width
        elementToUpdate!.height = value.height
      })
    ),
  setSelectedEl: (el) => set((state) => ({ ...state, selectedEl: el })),
  setHoveredEl: (el) => set((state) => ({ ...state, hoveredEl: el })),
  setSelectedElNull: () => set((state) => ({ ...state, selectedEl: null })),
  setHoveredElNull: () => set((state) => ({ ...state, hoveredEl: null })),
  removeElement: (id) =>
    set(
      produce((draft: ElementsSlice) => {
        const elIndex = draft.elements.findIndex((element) => element.id === id)
        draft.elements.splice(elIndex, 1)
      })
    ),
})
