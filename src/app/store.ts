import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { moviesApiSlice } from "../features/movies/moviesApiSlice"
import moviesReducer from "../features/movies/moviesSlice"

// Define the store configuration
export const makeStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      movies: moviesReducer,
      [moviesApiSlice.reducerPath]: moviesApiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(moviesApiSlice.middleware),
    preloadedState,
  })
}

// Create the store
export const store = makeStore()

// Export types
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
