import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  )
}
