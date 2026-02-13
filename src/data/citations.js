/**
 * Citations for images and AI-generated content.
 * Displayed in APA 7 format for academic use.
 *
 * IMPORTANT: Update imageCredits whenever you add, change, or remove images
 * in booking.js, attractions.js, events.js, or Home.jsx.
 */
const UTM = '?utm_source=taniti_island&utm_medium=referral'

/**
 * APA 7 citations for design, accessibility, and mobile decisions.
 * References used to inform UX choices on this site.
 */
export const designReferences = [
  {
    author: 'World Wide Web Consortium',
    year: '2025',
    title: 'Web Content Accessibility Guidelines (WCAG) 2.1',
    description: 'W3C Recommendation. Primary standard for accessibility; informed color contrast (AA), semantic HTML, and focus management',
    url: 'https://www.w3.org/TR/WCAG21/',
  },
  {
    author: 'World Wide Web Consortium',
    year: '2025',
    title: 'Understanding Success Criterion 2.4.1: Bypass Blocks',
    description: 'W3C. Rationale for skip links; keyboard users can bypass repeated navigation to reach main content',
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html',
  },
  {
    author: 'World Wide Web Consortium',
    year: '2025',
    title: 'Understanding Success Criterion 2.5.5: Target Size',
    description: 'W3C. Minimum 44×44 CSS pixels for touch targets; applied to nav links, filter pills, and buttons on mobile',
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html',
  },
  {
    author: 'Apple Inc.',
    year: 'n.d.',
    title: 'Human Interface Guidelines',
    description: 'Apple Developer. 44pt minimum touch target for iOS; reinforced our mobile touch target sizing decisions',
    url: 'https://developer.apple.com/design/human-interface-guidelines/',
  },
  {
    author: 'Mozilla Foundation',
    year: 'n.d.',
    title: 'Viewport meta tag',
    description: 'MDN Web Docs. width=device-width, initial-scale=1, viewport-fit=cover for responsive layout and safe areas on notched devices',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag',
  },
  {
    author: 'Mozilla Foundation',
    year: 'n.d.',
    title: 'prefers-reduced-motion',
    description: 'MDN Web Docs. CSS media query to respect user preference for reduced motion; animations and transitions are minimized when enabled',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion',
  },
  {
    author: 'Meta (Facebook)',
    year: 'n.d.',
    title: 'Accessibility',
    description: 'React documentation. Semantic HTML, ARIA attributes in JSX, keyboard navigation, and focus management; informed our use of aria-label, aria-pressed, and accessible form patterns',
    url: 'https://legacy.reactjs.org/docs/accessibility.html',
  },
  {
    author: 'Remix Software',
    year: 'n.d.',
    title: 'Accessibility',
    description: 'React Router documentation. Link and NavLink render native anchors for keyboard access; NavLink provides current-page context for assistive technology; informed our navigation structure',
    url: 'https://reactrouter.com/how-to/accessibility',
  },
]

/** APA 7 citations for AI tools used to generate content */
export const contentCredits = [
  {
    author: 'Anysphere',
    year: '2024',
    title: 'Cursor',
    description: 'AI-assisted code editor',
    url: 'https://cursor.com',
    context: 'Generated content for booking, attractions, and events data',
  },
]

export const imageCredits = [
  {
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
    photographer: 'Sasha Kaunas',
    profileUrl: `https://unsplash.com/@sashafreemind${UTM}`,
    context: 'Home hero',
  },
  {
    url: 'https://images.unsplash.com/photo-1584894727710-fa0f649db8f2',
    photographer: 'Adrien Aletti',
    profileUrl: `https://unsplash.com/@ahda_gallery${UTM}`,
    context: 'Yellow Leaf Bay Beaches',
  },
  {
    url: 'https://images.unsplash.com/photo-1768837005215-bdc046b1737d',
    photographer: 'Intricate Explorer',
    profileUrl: `https://unsplash.com/@intricateexplorer${UTM}`,
    context: 'Beachfront Villa',
  },
  {
    url: 'https://images.unsplash.com/photo-1491378630646-3440efa57c3b',
    photographer: 'Jack Hamilton',
    profileUrl: `https://unsplash.com/@jacc${UTM}`,
    context: 'Beachfront Condo',
  },
  {
    url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2',
    photographer: 'Brett Jordan',
    profileUrl: `https://unsplash.com/@brett_jordan${UTM}`,
    context: 'Beachfront House',
  },
  {
    url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
    photographer: 'Sergio Sala',
    profileUrl: `https://unsplash.com/@sergio_sala${UTM}`,
    context: 'Azure Kaimana Resort',
  },
  {
    url: 'https://images.unsplash.com/photo-1520277739336-7bf67edfa768',
    photographer: 'Toa Heftiba',
    profileUrl: `https://unsplash.com/@heftiba${UTM}`,
    context: 'Island Hostel',
  },
  {
    url: 'https://images.unsplash.com/photo-1613618948931-efbc3e6f9775',
    photographer: 'Emrah Kara',
    profileUrl: `https://unsplash.com/@emrahkara${UTM}`,
    context: 'Seaside B&B',
  },
  {
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    photographer: 'Florian Wehde',
    profileUrl: `https://unsplash.com/@florianwehde${UTM}`,
    context: 'Coconut Grove Hotel',
  },
  {
    url: 'https://images.unsplash.com/photo-1710788206590-a8bbd6007e12',
    photographer: 'Mario von Rotz',
    profileUrl: `https://unsplash.com/@mariovr${UTM}`,
    context: 'Volcano National Park',
  },
  {
    url: 'https://images.unsplash.com/photo-1576790535255-09ae1ca64ed1',
    photographer: 'Johannes Plenio',
    profileUrl: `https://unsplash.com/@jplenio${UTM}`,
    context: 'Volcano Moon Festival',
  },
  {
    url: 'https://images.unsplash.com/photo-1651183993471-ea2391960f6f',
    photographer: 'Scott Engelman',
    profileUrl: `https://unsplash.com/@saeinsocal${UTM}`,
    context: 'Zip-Line (attractions)',
  },
  {
    url: 'https://images.unsplash.com/photo-1575780684471-ed79a358de9a',
    photographer: 'Constante Lim',
    profileUrl: `https://unsplash.com/@chromasiastudios${UTM}`,
    context: 'Zip-Line Challenge Weekend',
  },
  {
    url: 'https://images.unsplash.com/photo-1625183656263-171183307b15',
    photographer: 'Gene Gallin',
    profileUrl: `https://unsplash.com/@genefoto${UTM}`,
    context: 'Charter Fishing',
  },
  {
    url: 'https://images.unsplash.com/photo-1656155175006-e2ee62a270c4',
    photographer: 'Daniel Diesenreither',
    profileUrl: `https://unsplash.com/@daniels_photofactory${UTM}`,
    context: 'Fishing Derby',
  },
  {
    url: 'https://images.unsplash.com/photo-1658298208155-ab71765747a1',
    photographer: 'Zunnoon Ahmed',
    profileUrl: `https://unsplash.com/@zunnu${UTM}`,
    context: 'Snorkeling (attractions)',
  },
  {
    url: 'https://images.unsplash.com/photo-1696694139314-e0e5962b8dc0',
    photographer: 'Shakib Uzzaman',
    profileUrl: `https://unsplash.com/@shakib2777${UTM}`,
    context: 'History Museum',
  },
  {
    url: 'https://images.unsplash.com/photo-1556360853-b581cf3c8eb2',
    photographer: 'Chromatograph',
    profileUrl: `https://unsplash.com/@chromatograph${UTM}`,
    context: 'Street Fair',
  },
  {
    url: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5',
    photographer: 'Annie Spratt',
    profileUrl: `https://unsplash.com/@anniespratt${UTM}`,
    context: 'Heritage Week, Art Galleries',
  },
  {
    url: 'https://images.unsplash.com/photo-1498623116890-37e912163d5d',
    photographer: 'Andrew Neel',
    profileUrl: `https://unsplash.com/@andrewtneel${UTM}`,
    context: 'Boat Tour, Bay Regatta',
  },
  {
    url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
    photographer: 'David Marcu',
    profileUrl: `https://unsplash.com/@davidmarcu${UTM}`,
    context: 'Bus Tour',
  },
  {
    url: 'https://images.unsplash.com/photo-1560951750-1e85780f946b',
    photographer: 'Diane Helentjaris',
    profileUrl: `https://unsplash.com/@dhelentjaris${UTM}`,
    context: 'Birding Festival',
  },
  {
    url: 'https://images.unsplash.com/photo-1747241118290-9ed0ecfffc05',
    photographer: 'Robert Bye',
    profileUrl: `https://unsplash.com/@robertbye${UTM}`,
    context: 'Rainforest Hiking',
  },
  {
    url: 'https://images.unsplash.com/photo-1683700242646-f74beb906386',
    photographer: 'Mia de Jesus',
    profileUrl: `https://unsplash.com/@mia_dj${UTM}`,
    context: 'Helicopter Tour',
  },
  {
    url: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13',
    photographer: 'Erol Ahmed',
    profileUrl: `https://unsplash.com/@erol${UTM}`,
    context: 'Microbrewery',
  },
  {
    url: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b',
    photographer: 'David Marcu',
    profileUrl: `https://unsplash.com/@davidmarcu${UTM}`,
    context: 'Golf Course',
  },
  {
    url: 'https://images.pexels.com/photos/27894343/pexels-photo-27894343.jpeg',
    photographer: 'Pexels',
    profileUrl: 'https://www.pexels.com/photo/a-man-is-performing-fire-on-the-beach-27894343/',
    context: 'Festival of Lights',
    source: 'Pexels',
  },
  {
    url: 'https://images.unsplash.com/photo-1620752420341-4cd7642568dd',
    photographer: 'Datingscout',
    profileUrl: `https://unsplash.com/@datingscout${UTM}`,
    context: 'Coconut Harvest Festival',
  },
  {
    url: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b',
    photographer: 'Georgy Trofimov',
    profileUrl: `https://unsplash.com/@igoshka1989${UTM}`,
    context: 'Cruise Ship Welcome Night',
  },
  {
    url: 'https://images.unsplash.com/photo-1627877081827-406327258622',
    photographer: 'Joshua Woroniecki',
    profileUrl: `https://unsplash.com/@joshuaworoniecki${UTM}`,
    context: 'Sunset Sail Social',
  },
  {
    url: 'https://images.unsplash.com/photo-1663247168201-1d6ea2d448fc',
    photographer: 'Hans',
    profileUrl: `https://unsplash.com/@hansphoto${UTM}`,
    context: 'Beach Bonfire & Stargazing',
  },
  {
    url: 'https://images.unsplash.com/photo-1634501087922-c01c76ed66d6',
    photographer: 'Josh Duke',
    profileUrl: `https://unsplash.com/@joshduke10${UTM}`,
    context: 'Volleyball Championship',
  },
  {
    url: 'https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg',
    photographer: 'Pexels',
    profileUrl: 'https://www.pexels.com/photo/photo-of-a-person-snorkeling-2404370/',
    context: 'Snorkeling Under the Stars',
    source: 'Pexels',
  },
  {
    url: 'https://images.pexels.com/photos/2744596/pexels-photo-2744596.jpeg',
    photographer: 'Pexels',
    profileUrl: 'https://www.pexels.com/photo/photo-of-person-swimming-near-school-of-clown-fish-2744596/',
    context: 'Snorkel & Discover Day',
    source: 'Pexels',
  },
  {
    url: 'https://images.unsplash.com/photo-1693643449954-dadf36202f86',
    photographer: 'Philipp Wüthrich',
    profileUrl: `https://unsplash.com/@phiwut${UTM}`,
    context: 'Volcano Sunrise Trek',
  },
  {
    url: 'https://images.unsplash.com/photo-1647729008051-67102d7284f4',
    photographer: 'Yosi Bitran',
    profileUrl: `https://unsplash.com/@ybitran${UTM}`,
    context: 'Home - Book Your Stay',
  },
  {
    url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
    photographer: 'Nathan Anderson',
    profileUrl: `https://unsplash.com/@nathananderson${UTM}`,
    context: 'Home - Explore our Sights',
  },
  {
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    photographer: 'Toa Heftiba',
    profileUrl: `https://unsplash.com/@heftiba${UTM}`,
    context: 'Home - Enjoy our Events',
  },
]
