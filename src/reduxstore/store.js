//Create a store for redux

import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    auth:authReducer,//from authslice
  },
})  //--->now provide this to main.jsx



