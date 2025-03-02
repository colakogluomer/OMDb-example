import { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import styles from "./Filter.module.scss"

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
    <form onSubmit={handleSearch} className={`${styles.filters} mb-4`}>
      <div className="row g-3">
        <div className="col-md-9">
          {/* Input fields column */}
          <div className="row g-3">
            {/* Search input */}
            <div className="col-12">
              <label htmlFor="searchInput" className="form-label">
                Title
              </label>
              <input
                id="searchInput"
                type="text"
                value={localSearchTerm}
                onChange={e => setLocalSearchTerm(e.target.value)}
                placeholder="Search"
                className="form-control"
              />
            </div>

            <div className="col-12">
              <div className="row">
                {/* Year filter */}
                <div className="col-md-6">
                  <label htmlFor="yearFilter" className="form-label">
                    Year
                  </label>
                  <DatePicker
                    id="yearFilter"
                    selected={selectedDate}
                    onChange={handleYearChange}
                    showYearPicker
                    dateFormat="yyyy"
                    yearItemNumber={12}
                    placeholderText="Select Year"
                    className="form-control w-100"
                    isClearable
                    wrapperClassName="w-100"
                    maxDate={new Date()} // Prevent selecting future years
                  />
                </div>

                {/* Type filter */}
                <div className="col-md-6">
                  <label htmlFor="typeFilter" className="form-label">
                    Type
                  </label>
                  <select
                    id="typeFilter"
                    value={selectedType}
                    onChange={e => onTypeChange(e.target.value)}
                    className="form-select w-100"
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
        </div>

        {/* Search button column */}
        <div className="col-md-3 d-flex align-items-end">
          <button
            type="submit"
            className={`${styles.searchButton} btn btn-primary w-100`}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default Filter
