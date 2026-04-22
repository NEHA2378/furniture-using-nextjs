import { configureStore } from '@reduxjs/toolkit'
import userSlice from './loginSlice'

export const reduxStore = configureStore({
  reducer: {
    login: userSlice
  },
})