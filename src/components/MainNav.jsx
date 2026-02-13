import { NavLink, Link, useLocation } from 'react-router-dom'

export default function MainNav() {
  const { pathname } = useLocation()
  const isInfoActive = ['/about', '/faq', '/contact'].includes(pathname)

  return (
    <nav className="main-nav" aria-label="Main navigation">
      <NavLink to="/" end className="main-nav__link">
        Home
      </NavLink>
      <NavLink to="/booking" end={false} className="main-nav__link">
        Visit
      </NavLink>
      <Link
        to="/about"
        className={`main-nav__link ${isInfoActive ? 'active' : ''}`}
      >
        Info
      </Link>
    </nav>
  )
}
