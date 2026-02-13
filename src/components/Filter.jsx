/**
 * Controlled filter - parent owns the value, passes it down and gets notified on change.
 */
export default function Filter({ filterLabel, filterOptions, activeFilter, onFilterChange }) {
  return (
    <section className="filters">
      <h2 className="filters__title">{filterLabel}</h2>
      <div className="filters__form">
        <label htmlFor="filter-select" className="filters__label">
          {filterLabel}
        </label>
        <select
          id="filter-select"
          className="filters__select"
          value={activeFilter}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {filterOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}
