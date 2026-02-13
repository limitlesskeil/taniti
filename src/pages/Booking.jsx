import Container from '../components/Container'
import Section from '../components/Section'
import Card from '../components/Card'
import booking from '../data/booking'

export default function Booking() {
  return (
    <Container>
      <h1>Booking</h1>
      <section className="filters">
        <h2>Filters</h2>
        <form>
          <input type="text" placeholder="Search" />
          <select name="category" id="category">
            <option value="all">All</option>
            <option value="hotel">Hotel</option>
            <option value="resort">Resort</option>
            <option value="bed and breakfast">Bed and Breakfast</option>
          </select>
        </form>
      </section>
      <Section title="Properties" className="cardGrid">
        {booking.map((item) => (
          <Card key={item.id} title={item.title} description={item.description} image={item.image} />
        ))}
      </Section>
    </Container>
  )
}
