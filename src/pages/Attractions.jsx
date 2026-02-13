import Container from '../components/Container'
import Section from '../components/Section'
import Card from '../components/Card'
import attractions from '../data/attractions'

export default function Attractions() {
    return (
    <Container>
      <h1>Attractions</h1>
      <section className="filters">
        <h2>Filters</h2>
        <form>
          <input type="text" placeholder="Search" />
          <select name="category" id="category">
            <option value="all">All</option>
            <option value="beach">Beach</option>
            <option value="hiking">Hiking</option>
          </select>
        </form>
      </section>
      <Section title="Attractions" className="cardGrid">
        {attractions.map((item) => (
          <Card key={item.id} title={item.title} description={item.description} image={item.image} />
        ))}
      </Section>
    </Container>
  )
}
