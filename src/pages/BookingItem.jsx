import { useParams } from 'react-router-dom'

export default function BookingItem() {
  const { id } = useParams()
  return <h1>Booking Item: {id}</h1>
}
