import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, useLocation } from 'react-router-dom'

const VISIT_ROUTES = ['/booking', '/attractions', '/events']
const INFO_ROUTES = ['/about', '/faq', '/contact']

function isInGroup(pathname, routes) {
  return routes.some(
    (route) => pathname === route || pathname.startsWith(route + '/')
  )
}

const VISIT_LINKS = [
  { to: '/booking', label: 'Booking' },
  { to: '/attractions', label: 'Attractions' },
  { to: '/events', label: 'Events' },
]

const INFO_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const isVisitActive = isInGroup(pathname, VISIT_ROUTES)
  const isInfoActive = isInGroup(pathname, INFO_ROUTES)

  const closeMobile = () => setMobileOpen(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const mobileMenu = (
    <div
      id="main-nav-mobile"
      className={`main-nav__menu main-nav__menu--mobile ${mobileOpen ? 'main-nav__menu--open' : ''}`}
      aria-hidden={!mobileOpen}
    >
        <NavLink
          to="/"
          end
          className="main-nav__link"
          onClick={closeMobile}
        >
          Home
        </NavLink>

        <div
          className={`main-nav__dropdown ${isVisitActive ? 'main-nav__dropdown--active' : ''}`}
        >
          <NavLink
            to="/booking"
            end={false}
            className={`main-nav__link main-nav__dropdown-trigger ${isVisitActive ? 'active' : ''}`}
            onClick={closeMobile}
          >
            Visit
          </NavLink>
          <ul className="main-nav__dropdown-menu" role="list">
            {VISIT_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className="main-nav__dropdown-link"
                  onClick={closeMobile}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`main-nav__dropdown ${isInfoActive ? 'main-nav__dropdown--active' : ''}`}
        >
          <NavLink
            to="/about"
            end={false}
            className={`main-nav__link main-nav__dropdown-trigger ${isInfoActive ? 'active' : ''}`}
            onClick={closeMobile}
          >
            Info
          </NavLink>
          <ul className="main-nav__dropdown-menu" role="list">
            {INFO_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className="main-nav__dropdown-link"
                  onClick={closeMobile}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
  )

  return (
    <nav className="main-nav" aria-label="Main navigation">
      <button
        type="button"
        className="main-nav__toggle"
        aria-expanded={mobileOpen}
        aria-controls="main-nav-mobile"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      >
        <span className="main-nav__toggle-bar" />
        <span className="main-nav__toggle-bar" />
        <span className="main-nav__toggle-bar" />
      </button>

      {/* Desktop: inline menu (hidden on mobile) */}
      <div className="main-nav__menu main-nav__menu--desktop">
        <NavLink to="/" end className="main-nav__link" onClick={closeMobile}>
          Home
        </NavLink>
        <div
          className={`main-nav__dropdown ${isVisitActive ? 'main-nav__dropdown--active' : ''}`}
        >
          <NavLink
            to="/booking"
            end={false}
            className={`main-nav__link main-nav__dropdown-trigger ${isVisitActive ? 'active' : ''}`}
          >
            Visit
          </NavLink>
          <ul className="main-nav__dropdown-menu" role="list">
            {VISIT_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className="main-nav__dropdown-link">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`main-nav__dropdown ${isInfoActive ? 'main-nav__dropdown--active' : ''}`}
        >
          <NavLink
            to="/about"
            end={false}
            className={`main-nav__link main-nav__dropdown-trigger ${isInfoActive ? 'active' : ''}`}
          >
            Info
          </NavLink>
          <ul className="main-nav__dropdown-menu" role="list">
            {INFO_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className="main-nav__dropdown-link">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile: portal to body to avoid clipping from header's backdrop-filter */}
      {createPortal(mobileMenu, document.body)}
    </nav>
  )
}
