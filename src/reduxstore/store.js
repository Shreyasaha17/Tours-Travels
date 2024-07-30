//Create a store for redux

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'trv',
  version: 1,
  storage,
}
const rootReducer = combineReducers({
  auth:authReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
      }),
})

export const persistor = persistStore(store)
//--->now provide this to main.jsx



