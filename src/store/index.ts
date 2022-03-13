import create, { SetState, GetState, StoreApi, StateCreator } from 'zustand'
import { createElementsSlice } from './elements'
import { createProjectSlice } from './projectBoard'
import { createShapeSlice } from './shapes'
import { createTextSlice } from './text'

const createRootStore = (set: SetState<any>, get: GetState<any>) => ({
  ...createProjectSlice(set, get),
  ...createElementsSlice(set, get),
  ...createTextSlice(set, get),
  ...createShapeSlice(set, get),
})

export const useAppStore = create(createRootStore)
