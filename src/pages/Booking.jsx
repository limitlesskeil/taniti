import Container from '../components/Container'
import Section from '../components/Section'
import Card from '../components/Card'
import booking from '../data/booking'
import { useState } from 'react'
import ListFilters from '../components/Filter'

export default function Booking() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filtered = booking.filter(item => 'all' === selectedFilter || item.keywords.includes(selectedFilter));

  return (
    <Container>
      <h1>Booking</h1>
      {/* Filters */}
      <ListFilters
        filterLabel="Filter by type"
        filterOptions={[
          { label: 'All', value: 'all' },
          { label: 'Hotel', value: 'hotel' },
          { label: 'Resort', value: 'resort' },
          { label: 'Bed and Breakfast', value: 'bed and breakfast' },
        ]}
        activeFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <Section title="Properties" className="cardGrid">
        {filtered.map((item) => (
          <Card key={item.id} title={item.title} description={item.description} image={item.image} />
        ))}
      </Section>
    </Container>
  )
}
