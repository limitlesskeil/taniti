import { Link } from 'react-router-dom'
import Container from './Container'

/**
 * Reusable "item not found" message for detail pages.
 */
export default function NotFoundMessage({ message = 'Item not found.', backTo, backLabel = 'Go back' }) {
  return (
    <Container>
      <div className="not-found-message">
        <h2>{message}</h2>
        {backTo && (
          <Link to={backTo} className="not-found-message__link">
            {backLabel}
          </Link>
        )}
      </div>
    </Container>
  )
}
