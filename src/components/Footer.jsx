import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__links" aria-label="Footer navigation">
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/attractions">Attractions</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/citations">Citations</Link>
      </nav>
      <p className="footer__copy">&copy; {new Date().getFullYear()} Taniti Island</p>
    </footer>
  )
}
