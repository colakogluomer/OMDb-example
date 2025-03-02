import MoviePlaceholder from "../../../../shared/MoviePlaceholder/MoviePlaceholder"
import type { Movie } from "../../../../store/movies/moviesApiSlice"
import styles from "./MovieTable.module.scss"
interface MovieTableProps {
  movies: Movie[]
  onMovieClick: (imdbID: string) => void
}

const MovieTable: React.FC<MovieTableProps> = ({ movies, onMovieClick }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className={styles.tableHeader}>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
            <th>IMDb ID</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr
              key={movie.imdbID}
              onClick={() => onMovieClick(movie.imdbID)}
              className={styles.movieRow}
            >
              <td className={styles.posterCell}>
                {movie.Poster && movie.Poster !== "N/A" ? (
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className={styles.poster}
                  />
                ) : (
                  <MoviePlaceholder
                    title={movie.Title}
                    width={50}
                    height={75}
                    className={styles.tablePlaceholder}
                  />
                )}
              </td>
              <td className={styles.movieTitle}>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Type}</td>
              <td>{movie.imdbID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MovieTable
