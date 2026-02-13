import Container from '../components/Container'
import Section from '../components/Section'
import Card from '../components/Card'
import events from '../data/events'

export default function Events() {
  return (
    <Container>
      <h1>Events</h1>
      <section className="filters">
        <h2>Filters</h2>
        <form>
          <input type="text" placeholder="Search" />
          <select name="category" id="category">
            <option value="all">All</option>
            <option value="cultural">Cultural</option>
            <option value="family">Family</option>
          </select>
        </form>
      </section>
      <Section title="Events" className="cardGrid">
        {events.map((item) => (
          <Card key={item.id} title={item.title} description={item.description} image={item.image} />
        ))}
      </Section>
    </Container>
  )
}
