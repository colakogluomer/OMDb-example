import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import styles from "../Movies.module.scss"

interface FilterProps {
  initialSearchTerm: string
  selectedYear: string
  selectedType: string
  onSearch: (searchTerm: string) => void
  onYearChange: (year: string) => void
  onTypeChange: (type: string) => void
}

const Filter: React.FC<FilterProps> = ({
  initialSearchTerm,
  selectedYear,
  selectedType,
  onSearch,
  onYearChange,
  onTypeChange,
}) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(initialSearchTerm)

  // Convert string year to Date object for the DatePicker
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    return selectedYear ? new Date(parseInt(selectedYear), 0) : null
  })

  // Update local state when selectedYear prop changes
  useEffect(() => {
    if (
      selectedYear &&
      (!selectedDate || selectedDate.getFullYear().toString() !== selectedYear)
    ) {
      setSelectedDate(new Date(parseInt(selectedYear), 0))
    } else if (!selectedYear && selectedDate) {
      setSelectedDate(null)
    }
  }, [selectedYear, selectedDate])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(localSearchTerm)
  }

  const handleYearChange = (date: Date | null) => {
    setSelectedDate(date)
    if (date) {
      onYearChange(date.getFullYear().toString())
    } else {
      onYearChange("")
    }
  }

  return (
    <div className={`${styles.filters} mb-4`}>
      <form onSubmit={handleSearch} className="mb-3">
        <div className="row g-2">
          <div className="col-md-10 col-sm-8">
            <input
              type="text"
              value={localSearchTerm}
              onChange={e => setLocalSearchTerm(e.target.value)}
              placeholder="Search for movies..."
              className="form-control"
            />
          </div>
          <div className="col-md-2 col-sm-4">
            <button
              type="submit"
              className={`${styles.searchButton} btn btn-primary w-100`}
            >
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <label htmlFor="yearFilter" className="me-2">
              Year:
            </label>
            <DatePicker
              id="yearFilter"
              selected={selectedDate}
              onChange={handleYearChange}
              showYearPicker
              dateFormat="yyyy"
              yearItemNumber={12}
              placeholderText="Select Year"
              className="form-control"
              isClearable
              maxDate={new Date()} // Prevent selecting future years
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <label htmlFor="typeFilter" className="me-2">
              Type:
            </label>
            <select
              id="typeFilter"
              value={selectedType}
              onChange={e => onTypeChange(e.target.value)}
              className="form-select"
            >
              <option value="">All</option>
              <option value="movie">Movies</option>
              <option value="series">TV Series</option>
              <option value="episode">Episodes</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
