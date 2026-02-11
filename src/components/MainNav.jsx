import { NavLink } from 'react-router-dom'

function isInfoActive(_, location) {
  const path = location.pathname
  return path === '/about' || path === '/faq' || path === '/contact'
}

export default function MainNav() {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <NavLink to="/" end className="main-nav__link">
        Home
      </NavLink>
      <NavLink to="/booking" end={false} className="main-nav__link">
        Visit
      </NavLink>
      <NavLink to="/about" isActive={isInfoActive} className="main-nav__link">
        Info
      </NavLink>
    </nav>
  )
}
