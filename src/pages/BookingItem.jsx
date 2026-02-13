import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import Section from '../components/Section'
import Card from '../components/Card'

export default function BookingItem() {
  const { id } = useParams()
  return (
    <Container>
      <h1>Booking Item: {id}</h1>
      <Section title="Booking Item: {id}">
        <Card title="Booking Item: {id}" description="Booking Item: {id}" image="https://via.placeholder.com/150" />
      </Section>
    </Container>
  )
}
