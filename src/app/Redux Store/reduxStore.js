import { configureStore } from '@reduxjs/toolkit'
import userSlice from './loginSlice'
import cartSlice from './cartSlice'

export const reduxStore = configureStore({
  reducer: {
    login: userSlice,
    cart: cartSlice
  },
})