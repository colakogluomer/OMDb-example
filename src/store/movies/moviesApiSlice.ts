import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Get environment variables
const API_KEY = import.meta.env.VITE_API_KEY
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://www.omdbapi.com"

// Define types for our API responses
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface SearchResponse {
  Search: Movie[]
  totalResults: string
  Response: string
}

export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Array<{ Source: string; Value: string }>
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

// Create the API slice
export const moviesApiSlice = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: builder => ({
    searchMovies: builder.query<
      SearchResponse,
      { searchTerm: string; page?: number; year?: string; type?: string }
    >({
      query: ({ searchTerm, page = 1, year = "", type = "" }) => {
        // Build query parameters
        const params = new URLSearchParams({
          apikey: API_KEY,
          s: searchTerm,
          page: page.toString(),
        })

        // Add optional parameters if they exist
        year && params.append("y", year)
        type && params.append("type", type)

        return `/?${params.toString()}`
      },
    }),
    getMovieDetails: builder.query<MovieDetails, string>({
      query: imdbID => {
        const params = new URLSearchParams({
          apikey: API_KEY,
          i: imdbID,
          plot: "full",
        })

        return `/?${params.toString()}`
      },
    }),
  }),
})

export const {
  useSearchMoviesQuery,
  useGetMovieDetailsQuery,
  useLazySearchMoviesQuery,
} = moviesApiSlice
