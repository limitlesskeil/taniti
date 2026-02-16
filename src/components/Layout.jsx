import { useRef, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import MainNav from './MainNav'
import Footer from './Footer'
import DocumentTitle from './DocumentTitle'
import { getPageTitle } from '../utils/pageTitles'

export default function Layout() {
  const mainRef = useRef(null)
  const { pathname } = useLocation()

  // Scroll to top and focus main on route change (React Router accessibility guidance)
  useEffect(() => {
    window.scrollTo(0, 0)
    mainRef.current?.focus()
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <div className={`layout ${isHome ? 'layout--home' : ''}`}>
      <DocumentTitle />
      {/* Live-region announcement for screen readers when route changes */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="visually-hidden"
        role="status"
      >
        {getPageTitle(pathname)} page loaded
      </div>
      <a
        href="#main-content"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault()
          mainRef.current?.focus()
        }}
      >
        Skip to main content
      </a>
      <header className="layout__header">
        <MainNav />
      </header>
      <main
        ref={mainRef}
        id="main-content"
        className="layout__main"
        aria-label="Main content"
        tabIndex={-1}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
