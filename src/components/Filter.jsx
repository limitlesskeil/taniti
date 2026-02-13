/**
 * Controlled filter with pill/chip buttons and optional price range.
 * Parent owns state; Filter renders UI and calls onChange/onPriceChange.
 */
export default function Filter({
  filterLabel,
  filterOptions,
  selectedValues = [],
  onChange,
  priceMax = '',
  onPriceMaxChange,
  showPriceMax = false,
  priceMaxLabel = 'Max price per night',
  priceMaxPlaceholder = 'e.g. 150',
}) {
  const pillOptions = filterOptions.filter((opt) => opt.value !== 'all')

  const handlePillClick = (value) => {
    const isSelected = selectedValues.includes(value)
    const next = isSelected
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value]
    onChange(next)
  }

  const handleClear = () => onChange([])

  return (
    <section className="filters">
      <h2 className="filters__title">{filterLabel}</h2>
      <div className="filters__pills">
        {pillOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`filters__pill ${selectedValues.includes(opt.value) ? 'filters__pill--active' : ''}`}
            onClick={() => handlePillClick(opt.value)}
            aria-pressed={selectedValues.includes(opt.value)}
          >
            {opt.label}
          </button>
        ))}
        {selectedValues.length > 0 && (
          <button
            type="button"
            className="filters__pill filters__pill--clear"
            onClick={handleClear}
          >
            Clear
          </button>
        )}
      </div>

      {showPriceMax && onPriceMaxChange && (
        <div className="filters__price">
          <h3 className="filters__price-title">{priceMaxLabel}</h3>
          <label className="filters__price-label">
            <span className="visually-hidden">{priceMaxLabel}</span>
            <input
              type="number"
              min="0"
              placeholder={priceMaxPlaceholder}
              value={priceMax}
              onChange={(e) => onPriceMaxChange(e.target.value)}
              className="filters__price-input"
            />
          </label>
        </div>
      )}
    </section>
  )
}
