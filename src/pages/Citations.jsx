import Container from '../components/Container'
import { designReferences, imageCredits, contentCredits } from '../data/citations'

/**
 * Format photographer name for APA 7: "Last Name, F. I."
 * Single names or names with "•" are used as-is.
 * Handles particles like "von", "van", "de" in surnames.
 */
function formatApaAuthor(name) {
  if (!name || name.includes('•')) return name
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return name
  const particles = ['von', 'van', 'de', 'la']
  let lastName, firstParts
  if (
    parts.length > 2 &&
    particles.includes(parts[parts.length - 2].toLowerCase())
  ) {
    lastName = parts.slice(-2).join(' ')
    firstParts = parts.slice(0, -2)
  } else {
    lastName = parts[parts.length - 1]
    firstParts = parts.slice(0, -1)
  }
  const initials = firstParts.map((p) => p[0]).join('. ')
  return `${lastName}, ${initials}.`
}

export default function Citations() {
  return (
    <Container>
      <h1>Citations</h1>
      <p className="citations-intro">
        This page cites all sources used on the site in APA 7 format.
      </p>

      <section className="citations-section">
        <h2>Design &amp; Accessibility References</h2>
        <p className="citations-section-intro">
          References that informed our design, accessibility, and mobile-friendly
          decisions. Format: Author. (Year). <em>Title</em> [Description]. URL
        </p>
        <ol className="citations-list">
          {designReferences.map((ref, i) => (
            <li key={i} className="citations-item">
              <span className="citations-apa">
                {ref.author}. ({ref.year}). <em>{ref.title}</em> [
                {ref.description}].{' '}
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="citations-url"
                >
                  {ref.url}
                </a>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="citations-section">
        <h2>Images</h2>
        <p className="citations-section-intro">
          Images are from Unsplash and Pexels. Format: Author. (n.d.).{' '}
          <em>Title</em> [Photograph]. Source. URL
        </p>
        <ol className="citations-list">
          {imageCredits.map((credit, i) => {
            const author = formatApaAuthor(credit.photographer)
            const title = credit.context
            const source = credit.source || 'Unsplash'
            const linkUrl =
              credit.source === 'Pexels' ? credit.profileUrl : credit.url
            return (
              <li key={i} className="citations-item">
                <span className="citations-apa">
                  {author} (n.d.). <em>{title}</em> [Photograph]. {source}.{' '}
                  <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="citations-url"
                  >
                    {linkUrl}
                  </a>
                </span>
              </li>
            )
          })}
        </ol>
      </section>

      <section className="citations-section">
        <h2>AI-Generated Content</h2>
        <p className="citations-section-intro">
          Some content was generated with AI assistance. Format: Author. (Year).{' '}
          <em>Title</em> [Description]. URL
        </p>
        <ol className="citations-list">
          {contentCredits.map((credit, i) => (
            <li key={i} className="citations-item">
              <span className="citations-apa">
                {credit.author}. ({credit.year}). <em>{credit.title}</em> [
                {credit.description}].{' '}
                <a
                  href={credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="citations-url"
                >
                  {credit.url}
                </a>
              </span>
            </li>
          ))}
        </ol>
      </section>
    </Container>
  )
}
