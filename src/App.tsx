import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MovieList from "./pages/movies/MovieList"
import "./App.scss"

// Lazy load MovieDetails component
const MovieDetails = lazy(() => import("./pages/movies/MovieDetails"))
const NotFound = lazy(() => import("./shared/NotFound"))

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />

          {/* MovieDetails sayfası Lazy Load edildi */}
          <Route path="/movie/:imdbID" element={<MovieDetails />} />

          {/* 404 Not Found sayfası */}
          <Route
            path="*"
            element={
              <Suspense fallback={<h2>Loading...</h2>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
