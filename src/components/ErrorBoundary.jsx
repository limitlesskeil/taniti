import { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

/**
 * Error boundary – catches React errors in child components and shows a fallback UI.
 * Wrap parts of the app that might throw (e.g. route content) to prevent full app crash.
 */
class ErrorBoundary extends Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <div className="error-boundary">
            <h1>Something went wrong</h1>
            <p>We&apos;re sorry, but something unexpected happened.</p>
            <Link to="/" className="error-boundary__link">
              Return to home
            </Link>
          </div>
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
