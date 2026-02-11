import { Outlet } from 'react-router-dom'
import MainNav from './MainNav'
import SubNav from './SubNav'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="layout">
      <header className="layout__header">
        <MainNav />
        <SubNav />
      </header>
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
