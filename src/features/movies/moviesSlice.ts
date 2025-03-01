import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

interface MoviesState {
  searchTerm: string
  currentPage: number
  selectedYear: string
  selectedType: "movie" | "series" | "episode" | ""
}

const initialState: MoviesState = {
  searchTerm: "Pokemon", // Default search term as specified
  currentPage: 1,
  selectedYear: "",
  selectedType: "",
}

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
      state.currentPage = 1 // Reset to first page on new search
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setSelectedYear: (state, action: PayloadAction<string>) => {
      state.selectedYear = action.payload
      state.currentPage = 1 // Reset to first page on year change
    },
    setSelectedType: (
      state,
      action: PayloadAction<"movie" | "series" | "episode" | "">,
    ) => {
      state.selectedType = action.payload
      state.currentPage = 1 // Reset to first page on type change
    },
  },
})

export const {
  setSearchTerm,
  setCurrentPage,
  setSelectedYear,
  setSelectedType,
} = moviesSlice.actions

// Selectors
export const selectSearchTerm = (state: RootState) => state.movies.searchTerm
export const selectCurrentPage = (state: RootState) => state.movies.currentPage
export const selectSelectedYear = (state: RootState) =>
  state.movies.selectedYear
export const selectSelectedType = (state: RootState) =>
  state.movies.selectedType

export default moviesSlice.reducer
