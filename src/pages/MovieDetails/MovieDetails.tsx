import { useParams, useNavigate } from "react-router-dom"
import { useGetMovieDetailsQuery } from "../../store/movies/moviesApiSlice"
import MoviePlaceholder from "../../shared/MoviePlaceholder/MoviePlaceholder"
import DetailsSkeleton from "./components/DetailsSkeleton/DetailsSkeleton"
import styles from "./MovieDetails.module.scss"

const MovieDetails: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>()
  const navigate = useNavigate()

  const {
    data: movie,
    error,
    isLoading,
  } = useGetMovieDetailsQuery(imdbID || "")

  if (isLoading) {
    return <DetailsSkeleton />
  }

  if (error) {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-12 text-center text-danger">
            Error loading movie details
          </div>
        </div>
      </div>
    )
  }

  if (!movie || movie.Response === "False") {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-12 text-center">Movie not found</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-12">
          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            &larr; Back
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          {movie.Poster && movie.Poster !== "N/A" ? (
            <img
              src={movie.Poster}
              alt={movie.Title}
              className={`img-fluid rounded ${styles.detailsPoster}`}
            />
          ) : (
            <MoviePlaceholder
              title={movie.Title}
              className={styles.detailsPlaceholder}
            />
          )}
        </div>
        <div className="col-md-8">
          <h1>
            {movie.Title} <small className="text-muted">({movie.Year})</small>
          </h1>

          <div className="d-flex flex-wrap gap-3 text-muted mb-4">
            <div>{movie.Rated}</div>
            <div>{movie.Runtime}</div>
            <div>{movie.Genre}</div>
            <div>{movie.Released}</div>
          </div>

          <div className="mb-4">
            <h5>Rating</h5>
            <div className="d-flex flex-wrap gap-3">
              {movie.Ratings.map((rating, index) => (
                <div key={index} className="badge bg-primary p-2">
                  {rating.Source}: {rating.Value}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h5>Plot</h5>
            <p>{movie.Plot}</p>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <h5>Cast & Crew</h5>
              <p>
                <strong>Director:</strong> {movie.Director}
              </p>
              <p>
                <strong>Writer:</strong> {movie.Writer}
              </p>
              <p>
                <strong>Actors:</strong> {movie.Actors}
              </p>
            </div>
            <div className="col-md-6">
              <h5>Details</h5>
              <p>
                <strong>Language:</strong> {movie.Language}
              </p>
              <p>
                <strong>Country:</strong> {movie.Country}
              </p>
              {movie.Awards !== "N/A" && (
                <p>
                  <strong>Awards:</strong> {movie.Awards}
                </p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h5>Additional Information</h5>
              <div className="row">
                {movie.BoxOffice && (
                  <div className="col-md-6">
                    <p>
                      <strong>Box Office:</strong> {movie.BoxOffice}
                    </p>
                  </div>
                )}
                {movie.Production && (
                  <div className="col-md-6">
                    <p>
                      <strong>Production:</strong> {movie.Production}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
