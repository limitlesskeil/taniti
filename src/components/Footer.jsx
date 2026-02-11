import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/attractions">Attractions</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p className="footer__copy">&copy; {new Date().getFullYear()} Taniti Island</p>
    </footer>
  )
}
