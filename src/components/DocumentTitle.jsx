import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getFullPageTitle } from '../utils/pageTitles'

export default function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = getFullPageTitle(pathname)
  }, [pathname])

  return null
}
