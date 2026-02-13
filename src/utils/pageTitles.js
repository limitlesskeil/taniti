export const TITLE_MAP = {
  '/': 'Taniti Island',
  '/booking': 'Booking',
  '/attractions': 'Attractions',
  '/events': 'Events',
  '/faq': 'FAQ',
  '/about': 'About',
  '/contact': 'Contact',
  '/citations': 'Image Credits',
}

export function getPageTitle(pathname) {
  if (pathname === '/') return TITLE_MAP['/']
  if (pathname.startsWith('/booking')) return TITLE_MAP['/booking']
  if (pathname.startsWith('/attractions')) return TITLE_MAP['/attractions']
  if (pathname.startsWith('/events')) return TITLE_MAP['/events']
  if (pathname.startsWith('/faq')) return TITLE_MAP['/faq']
  if (pathname.startsWith('/about')) return TITLE_MAP['/about']
  if (pathname.startsWith('/contact')) return TITLE_MAP['/contact']
  if (pathname.startsWith('/citations')) return TITLE_MAP['/citations']
  return 'Taniti Island'
}

export function getFullPageTitle(pathname) {
  if (pathname === '/') return 'Taniti Island'
  if (pathname.startsWith('/booking')) return 'Booking – Taniti Island'
  if (pathname.startsWith('/attractions')) return 'Attractions – Taniti Island'
  if (pathname.startsWith('/events')) return 'Events – Taniti Island'
  if (pathname.startsWith('/faq')) return 'FAQ – Taniti Island'
  if (pathname.startsWith('/about')) return 'About – Taniti Island'
  if (pathname.startsWith('/contact')) return 'Contact – Taniti Island'
  if (pathname.startsWith('/citations')) return 'Image Credits – Taniti Island'
  return 'Taniti Island'
}
