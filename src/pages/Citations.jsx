import Container from '../components/Container'
import { imageCredits } from '../data/citations'

export default function Citations() {
  return (
    <Container>
      <h1>Image Credits</h1>
      <p className="citations-intro">
        Photos on this site are from Unsplash. We thank the photographers for
        sharing their work. Attribution follows Unsplash guidelines.
      </p>
      <ul className="citations-list">
        {imageCredits.map((credit, i) => (
          <li key={i} className="citations-item">
            <span className="citations-context">{credit.context}</span>
            <span className="citations-attribution">
              Photo by{' '}
              <a
                href={credit.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {credit.photographer}
              </a>{' '}
              on{' '}
              <a
                href={`https://unsplash.com/?utm_source=taniti_island&utm_medium=referral`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </span>
          </li>
        ))}
      </ul>
    </Container>
  )
}
