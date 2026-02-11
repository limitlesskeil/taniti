import Container from '../components/Container'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Section from '../components/Section'

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <Hero title="Welcome to Taniti Island" description="Discover the best attractions and activities on Taniti Island." image="https://via.placeholder.com/150" />
      <Section title="Welcome to Taniti Island">
        <Card title="Explore the Island" description="Discover the best attractions and activities on Taniti Island." image="https://via.placeholder.com/150" />
        <Card title="Explore the Island" description="Discover the best attractions and activities on Taniti Island." image="https://via.placeholder.com/150" />
      </Section>
    </Container>
  )
}
