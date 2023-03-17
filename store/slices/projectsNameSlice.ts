import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface ProjectNameState {
    value: string[]
}

// Define the initial state using that type
const initialState: ProjectNameState = {
  value: []
}

export const projectNameSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      // Use the PayloadAction type to declare the contents of `action.payload`
      addProject: (state, action: PayloadAction<{projectName: string}>) => {
        state.value.push(action.payload.projectName)
        state.value.sort() 
      },

      // Use the PayloadAction type to declare the contents of `action.payload`
      setProjects: (state, action: PayloadAction<{projects: string[]}>) => {
        state.value = action.payload.projects
        state.value.sort() 
      },

      // Use the PayloadAction type to declare the contents of `action.payload`
      removeProject: (state, action: PayloadAction<{index: number}>) => {
        state.value.splice(action.payload.index)
      }
    }
})

export const { addProject, removeProject, setProjects } = projectNameSlice.actions
  // Other code such as selectors can use the imported `RootState` type
export const selectProjects = (state: RootState) => state.projectName.value
export default projectNameSlice.reducer