import Container from '../components/Container'
import Section from '../components/Section'
import Card from '../components/Card'
import booking from '../data/booking'
import { useState } from 'react'
import ListFilters from '../components/Filter'

function getPriceRange(item) {
  const rooms = item.rooms ?? []
  const prices = rooms
    .map((r) => parseInt(r.price?.replace(/[^0-9]/g, ''), 10))
    .filter((n) => !isNaN(n))
  if (prices.length === 0) return null
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  return min === max ? `$${min}/night` : `$${min} – $${max}/night`
}

export default function Booking() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filtered = booking.filter(
    (item) => selectedFilter === 'all' || (item.category ?? '').toLowerCase() === selectedFilter.toLowerCase()
  )

  return (
    <Container>
      <div className="filter-page-layout">
        <h1>Booking</h1>
        {/* Filters */}
        <ListFilters
          filterLabel="Filter by type"
          filterOptions={[
            { label: 'All', value: 'all' },
            { label: 'Hotel', value: 'hotel' },
            { label: 'Resort', value: 'resort' },
            { label: 'Bed and Breakfast', value: 'bed and breakfast' },
            { label: 'Hostel', value: 'hostel' },
          ]}
          activeFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
        <Section title="Properties" className="cardGrid">
          {filtered.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              price={getPriceRange(item)}
            />
          ))}
        </Section>
      </div>
    </Container>
  )
}
