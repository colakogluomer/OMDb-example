import { Link } from "react-router-dom"

const NotFound: React.FC = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-1 mb-4">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="lead mb-5">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary">
        Go to Homepage
      </Link>
    </div>
  )
}

export default NotFound
