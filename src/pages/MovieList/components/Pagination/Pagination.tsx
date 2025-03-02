import React from "react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = React.memo(
  ({ currentPage, totalPages, onPageChange }) => {
    // Generate pagination items
    const renderPaginationItems = () => {
      const items = []
      const maxVisiblePages = 5 // Number of page buttons to show

      // Always show first page
      items.push(
        <li
          key={1}
          className={`page-item ${currentPage === 1 ? "active" : ""}`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            1
          </button>
        </li>,
      )

      // Calculate range of pages to show
      let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2))
      let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1)

      // Adjust if we're near the end
      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(2, endPage - maxVisiblePages + 1)
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        items.push(
          <li key="ellipsis1" className="page-item disabled">
            <span className="page-link">...</span>
          </li>,
        )
      }

      // Add page numbers
      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <li
            key={i}
            className={`page-item ${currentPage === i ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => onPageChange(i)}>
              {i}
            </button>
          </li>,
        )
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1 && totalPages > 2) {
        items.push(
          <li key="ellipsis2" className="page-item disabled">
            <span className="page-link">...</span>
          </li>,
        )
      }

      // Always show last page if there is more than one page
      if (totalPages > 1) {
        items.push(
          <li
            key={totalPages}
            className={`page-item ${currentPage === totalPages ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </button>
          </li>,
        )
      }

      return items
    }

    return (
      <nav aria-label="Movie results pagination">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          {renderPaginationItems()}

          <li
            className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              aria-label="Next page"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    )
  },
)

export default Pagination
