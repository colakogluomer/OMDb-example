import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  selectSearchTerm,
  selectCurrentPage,
  selectSelectedYear,
  selectSelectedType,
  setSearchTerm,
  setCurrentPage,
  setSelectedYear,
  setSelectedType,
} from "./moviesSlice"
import { useSearchMoviesQuery } from "./moviesApiSlice"
import styles from "./Movies.module.scss"

// Import our new components
import Filter from "./components/Filter"
import MovieTable from "./components/MovieTable"
import Pagination from "./components/Pagination"
import ScrollToTop from "./components/ScrollToTop"
import TableSkeleton from "./components/TableSkeleton"

const MovieList: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const searchTerm = useAppSelector(selectSearchTerm)
  const currentPage = useAppSelector(selectCurrentPage)
  const selectedYear = useAppSelector(selectSelectedYear)
  const selectedType = useAppSelector(selectSelectedType)

  const [totalPages, setTotalPages] = useState(0)

  const { data, error, isLoading } = useSearchMoviesQuery({
    searchTerm,
    page: currentPage,
    year: selectedYear,
    type: selectedType || undefined,
  })

  // Calculate total pages when data changes
  useEffect(() => {
    if (data && data.totalResults) {
      const total = Math.ceil(parseInt(data.totalResults) / 10)
      setTotalPages(total)
    }
  }, [data])

  const handleSearch = (newSearchTerm: string) => {
    dispatch(setSearchTerm(newSearchTerm))
  }

  const handleMovieClick = (imdbID: string) => {
    navigate(`/movie/${imdbID}`)
  }

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage))
    // Smooth scroll to top when changing page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleYearChange = (year: string) => {
    dispatch(setSelectedYear(year))
  }

  const handleTypeChange = (type: string) => {
    dispatch(setSelectedType(type as any))
  }

  if (isLoading) {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className={styles.heading}>Movie Database</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Filter
              initialSearchTerm={searchTerm}
              selectedYear={selectedYear}
              selectedType={selectedType}
              onSearch={handleSearch}
              onYearChange={handleYearChange}
              onTypeChange={handleTypeChange}
            />
          </div>
        </div>

        <TableSkeleton rows={10} />
      </div>
    )
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h1 className={styles.heading}>Movie Database</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Filter
            initialSearchTerm={searchTerm}
            selectedYear={selectedYear}
            selectedType={selectedType}
            onSearch={handleSearch}
            onYearChange={handleYearChange}
            onTypeChange={handleTypeChange}
          />
        </div>
      </div>

      {error && (
        <div className="row">
          <div className="col-12">
            <div className={styles.error}>Error: {JSON.stringify(error)}</div>
          </div>
        </div>
      )}

      {data && data.Response === "False" && (
        <div className="row">
          <div className="col-12">
            <div className={styles.noResults}>
              No results found. Try a different search term.
            </div>
          </div>
        </div>
      )}

      {data && data.Response === "True" && (
        <>
          <div className="row">
            <div className="col-12">
              <div className={styles.results}>
                Found {data.totalResults} results
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <MovieTable
                movies={data.Search}
                onMovieClick={handleMovieClick}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </>
      )}

      <ScrollToTop />
    </div>
  )
}

export default MovieList
