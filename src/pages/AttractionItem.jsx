import { useParams } from 'react-router-dom'

export default function AttractionItem() {
  const { id } = useParams()
  return <h1>Attraction Item: {id}</h1>
}
