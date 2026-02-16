import { Link } from 'react-router-dom'
import Container from '../components/Container'

export default function NotFound() {
  return (
    <Container>
      <div className="not-found-message">
        <h1>404 – Page Not Found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className="not-found-message__link">Go to Home</Link>
      </div>
    </Container>
  )
}
