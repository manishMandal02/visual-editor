import { type } from 'os'
import { SetState, GetState } from 'zustand'

import {
  ProjectBoardSize,
  projectBoardSetting,
  Element,
} from '../types/canvas.type'

type StoreSlice<T extends object, E extends object = T> = (
  set: SetState<E extends T ? E : E & T>,
  get: GetState<E extends T ? E : E & T>
) => T

interface ElementsSlice {
  elements: Element[]
  selectedEl: Element | null
  hoveredEl: Element | null
  onDragEl: (values: { id: string; x: number; y: number }) => void
  onTransformEl: (values: {
    id: string
    x: number
    y: number
    height: number
    width: number
  }) => void
  setSelectedEl: (el: Element) => void
  setHoveredEl: (el: Element) => void
  setSelectedElNull: () => void
  setHoveredElNull: () => void
  removeElement: (id: string) => void
}

export type { StoreSlice, ElementsSlice }
