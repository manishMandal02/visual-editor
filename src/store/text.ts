import create, { SetState, GetState, StoreApi, StateCreator } from 'zustand'
// import { devtools } from 'zustand/middleware'
import produce from 'immer'
import { textColor, text } from '../types/canvas.type'

interface fillUpdate extends textColor {
  id: string
}

interface textStoreType {
  texts: text[]
  addText: (text: text) => void
  removeText: (id: string) => void
  onDrag: (values: { id: string; x: number; y: number }) => void
  onTransform: (text: text) => void
  onTextUpdate: (id: string, text: string) => void
  onColorUpdate: (fill: fillUpdate) => void
}

const textStore:
  | StateCreator<
      textStoreType,
      SetState<textStoreType>,
      GetState<textStoreType>,
      any
    >
  | StoreApi<textStoreType> = (set: SetState<textStoreType>) => ({
  texts: [],
  addText: (text) =>
    set((state) => ({ ...state, texts: [...state.texts, text] })),
  removeText: (id) =>
    set(
      produce((draft: textStoreType) => {
        const textIndex = draft.texts.findIndex((t) => t.id === id)
        draft.texts.splice(textIndex, 1)
      })
    ),
  onDrag: ({ id, x, y }) =>
    set(
      produce((draft: textStoreType) => {
        const text = draft.texts.find((t) => t.id === id)
        text!.x = x
        text!.y = y
      })
    ),
  onTransform: (text) =>
    set(
      produce((draft: textStoreType) => {
        const textToUpdate = draft.texts.find((t) => t.id === text.id)
        textToUpdate!.x = text.x
        textToUpdate!.y = text.y

        textToUpdate!.width = text.width
        textToUpdate!.height = text.height
      })
    ),
  onTextUpdate: (id, text) =>
    set(
      produce((drafts: textStoreType) => {
        const textToUpdate = drafts.texts.find((t) => t.id === id)
        textToUpdate!.text = text
      })
    ),
  onColorUpdate: ({ id, color, opacity }) =>
    set(
      produce((draft: textStoreType) => {
        const text = draft.texts.find((t) => t.id === id)
        text!.color.color = color
        text!.color.opacity = opacity
      })
    ),
})

export const useTextStore = create<textStoreType>(textStore)
