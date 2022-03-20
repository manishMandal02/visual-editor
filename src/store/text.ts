import create, { SetState, GetState, StoreApi, StateCreator } from 'zustand'
// import { devtools } from 'zustand/middleware'
import produce from 'immer'
import { TextStyle, Text, TextShadow } from '../types/canvas.type'
import { ElementsSlice, StoreSlice } from '../types/store.types'
import { TYPE_TEXT } from '../constants'

interface TextSliceType {
  addText: (text: Text) => void
  onTextUpdate: (id: string, text: string) => void
  onTextPropertiesUpdate: (style: TextStyle) => void
  onTextShadow: (style: TextShadow) => void
}

export const createTextSlice: StoreSlice<TextSliceType, ElementsSlice> = (
  set,
  get
) => ({
  addText: (text) =>
    set((state) => ({ ...state, elements: [...state.elements, text] })),
  onTextUpdate: (id, text) =>
    set(
      produce((drafts: ElementsSlice) => {
        const textToUpdate = drafts.elements.find((t) => t.id === id)
        if (textToUpdate?.type === TYPE_TEXT) {
          textToUpdate!.text = text
        }
      })
    ),
  onTextPropertiesUpdate: ({
    color,
    opacity,
    fontSize,
    font,
    isBold,
    isItalic,
    isUnderline,
    isLineThrough,
    align,
    alignVertical,
    stroke,
    spacing,
  }) =>
    set(
      produce((draft: ElementsSlice) => {
        const text = draft.elements.find((t) => t.id === get().selectedEl?.id)
        if (text?.type === TYPE_TEXT) {
          text!.style.color = color
          text!.style.opacity = opacity
          text!.style.align = align
          text!.style.fontSize = fontSize
          text!.style.font = font
          text!.style.isBold = isBold
          text!.style.isItalic = isItalic
          text!.style.isUnderline = isUnderline
          text!.style.isLineThrough = isLineThrough
          text!.style.align = align
          text!.style.alignVertical = alignVertical
          text!.style.stroke = stroke
          text!.style.spacing = spacing
        }
      })
    ),
  onTextShadow: (shadow) =>
    set(
      produce((draft: ElementsSlice) => {
        const text = draft.elements.find((t) => t.id === get().selectedEl?.id)
        if (text?.type === TYPE_TEXT) {
          text!.shadow = shadow
        }
      })
    ),
})
