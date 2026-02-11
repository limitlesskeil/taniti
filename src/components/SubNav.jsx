import { NavLink, useLocation } from 'react-router-dom'

const VISIT_ROUTES = ['/booking', '/attractions', '/events']
const INFO_ROUTES = ['/about', '/faq', '/contact']

function isInGroup(pathname, groupRoutes) {
  return groupRoutes.some((route) => pathname === route || pathname.startsWith(route + '/'))
}

export default function SubNav() {
  const { pathname } = useLocation()

  if (isInGroup(pathname, VISIT_ROUTES)) {
    return (
      <nav className="sub-nav" aria-label="Visit section">
        <NavLink to="/booking" className="sub-nav__link">
          Booking
        </NavLink>
        <NavLink to="/attractions" className="sub-nav__link">
          Attractions
        </NavLink>
        <NavLink to="/events" className="sub-nav__link">
          Events
        </NavLink>
      </nav>
    )
  }

  if (isInGroup(pathname, INFO_ROUTES)) {
    return (
      <nav className="sub-nav" aria-label="Plan your trip">
        <NavLink to="/about" className="sub-nav__link">
          About
        </NavLink>
        <NavLink to="/faq" className="sub-nav__link">
          FAQ
        </NavLink>
        <NavLink to="/contact" className="sub-nav__link">
          Contact
        </NavLink>
      </nav>
    )
  }

  return null
}
