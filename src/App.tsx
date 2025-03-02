import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MovieList from "./pages/MovieList/MovieList"
import "./App.scss"

// Lazy load MovieDetails component
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"))
const NotFound = lazy(() => import("./shared/NotFound"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
