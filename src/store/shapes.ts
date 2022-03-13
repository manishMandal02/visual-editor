import produce from 'immer'
import { Shape, ShapeStyle } from '../types/canvas.type'
import { CIRCLE, RECTANGLE, TYPE_SHAPE } from '../constants'
import { ElementsSlice, StoreSlice } from '../types/store.types'

interface ShapeStoreType {
  addShape: (shape: Shape) => void
  onStyleChange: (style: ShapeStyle) => void
}

export const createShapeSlice: StoreSlice<ShapeStoreType, ElementsSlice> = (
  set,
  get
) => ({
  addShape: (shape) =>
    set((state) => ({ ...state, elements: [...state.elements, shape] })),

  onStyleChange: ({ fillColor, strokeColor, strokeWidth }) =>
    set(
      produce((draft: ElementsSlice) => {
        const shape = draft.elements.find((s) => s.id === get().selectedEl?.id)
        if (shape?.type === TYPE_SHAPE) {
          shape.style.fillColor = fillColor
          shape!.style.strokeColor = strokeColor
          shape!.style.strokeWidth = strokeWidth
        }
      })
    ),
})
