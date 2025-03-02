import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../store/hooks"
import {
  selectSearchTerm,
  selectCurrentPage,
  selectSelectedYear,
  selectSelectedType,
  setSearchTerm,
  setCurrentPage,
  setSelectedYear,
  setSelectedType,
} from "../../store/movies/moviesSlice"
import { useSearchMoviesQuery } from "../../store/movies/moviesApiSlice"
import styles from "./MovieList.module.scss"

// Components
import Filter from "./components/Filter/Filter"
import MovieTable from "./components/MovieTable/MovieTable"
import Pagination from "./components/Pagination/Pagination"
import ScrollToTop from "../../shared/ScrollToTop/ScrollToTop"
import TableSkeleton from "./components/TableSkeleton/TableSkeleton"

const MovieList: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // State from Redux
  const { searchTerm, currentPage, selectedYear, selectedType } =
    useAppSelector(state => ({
      searchTerm: selectSearchTerm(state),
      currentPage: selectCurrentPage(state),
      selectedYear: selectSelectedYear(state),
      selectedType: selectSelectedType(state),
    }))

  const [totalPages, setTotalPages] = useState(0)

  // Fetch data
  const { data, error, isLoading, isFetching } = useSearchMoviesQuery({
    searchTerm,
    page: currentPage,
    year: selectedYear,
    type: selectedType || undefined,
  })

  // Update total pages when data changes
  useEffect(() => {
    if (data?.totalResults) {
      setTotalPages(Math.ceil(parseInt(data.totalResults) / 10))
    }
  }, [data])

  // Event Handlers
  const handleSearch = (newSearchTerm: string) =>
    dispatch(setSearchTerm(newSearchTerm))
  const handleMovieClick = (imdbID: string) => navigate(`/movie/${imdbID}`)
  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const handleYearChange = (year: string) => dispatch(setSelectedYear(year))
  const handleTypeChange = (type: string) =>
    dispatch(setSelectedType(type as any))

  return (
    <div className="container py-4">
      <h1 className={styles.heading}>Movie Database</h1>

      {/* Search Filters */}
      <Filter
        initialSearchTerm={searchTerm}
        selectedYear={selectedYear}
        selectedType={selectedType}
        onSearch={handleSearch}
        onYearChange={handleYearChange}
        onTypeChange={handleTypeChange}
      />

      {/* Conditional Table Rendering */}
      {isLoading || isFetching ? (
        <TableSkeleton rows={10} />
      ) : error ? (
        <div className={styles.error}>Error: {JSON.stringify(error)}</div>
      ) : data?.Response === "False" ? (
        <div className={styles.noResults}>No results found.</div>
      ) : (
        <>
          <div className={styles.results}>
            Found {data!.totalResults} results
          </div>
          <MovieTable movies={data!.Search} onMovieClick={handleMovieClick} />
          <div className="d-flex justify-content-center mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}

      <ScrollToTop />
    </div>
  )
}

export default MovieList
