import { Link } from 'react-router-dom'
import Container from '../components/Container'

export default function About() {
  return (
    <Container>
      <div className="about-page">
        <h1>About Taniti</h1>
        <p>
          Taniti is a small, tropical island in the Pacific. With an area of
          less than 500 square miles, the island has a population of about
          20,000. Taniti has native architecture and a welcoming atmosphere.
        </p>

        <h2>Transportation</h2>
        <p>
          Taniti is served by a small airport that accommodates small jets and
          propeller planes; the airport is being expanded to welcome larger jets
          within the next few years. You can also arrive by cruise ship—many
          cruise lines include Taniti on their Pacific itineraries. Public
          buses serve Taniti City from 5 a.m. to 11 p.m. daily, while private
          buses cover the rest of the island. Taxis are available in Taniti
          City, and rental cars can be rented from a local agency near the
          airport.
        </p>
        <p>
          <Link to="/faq" className="about-page__link">More transportation details in our FAQ</Link>
        </p>

        <h2>Cool Facts</h2>
        <p>
          Taniti is home to an active volcano—Volcano National Park offers
          guided hikes through volcanic terrain with stunning views. The island
          enjoys a tropical climate year-round, perfect for beach days and
          rainforest adventures.
        </p>
        <p>
          Taniti City is the heart of the island, with native architecture and
          a waterfront that comes alive during festivals. Yellow Leaf Bay
          encircles the island with white, sandy beaches, while Merriton
          Landing and rainforest trails offer a mix of coastal charm and jungle
          exploration.
        </p>
        <nav className="about-page__links" aria-label="Explore these places">
          <Link to="/attractions/2">Volcano National Park</Link>
          <Link to="/attractions/1">Yellow Leaf Bay</Link>
          <Link to="/attractions/5">Merriton Landing</Link>
          <Link to="/attractions/3">Rainforest Canopy Zip-Line</Link>
        </nav>

        <h2>Ideas for Your Visit</h2>
        <p>
          Zip through the rainforest canopy, snorkel the crystal-clear waters
          near Merriton Landing, or join a charter fishing tour. Explore
          Taniti&apos;s history at the museum, take an island boat tour, or
          catch a bus tour through the city and scenic overlooks.
        </p>
        <p>
          Time your trip around a festival—the Festival of Lights, Volcano Moon
          Festival, Heritage Week, or the weekly Merriton Landing Street Fair.
          Whether you&apos;re after adventure, culture, or relaxation, Taniti has
          something for you.
        </p>
        <nav className="about-page__links" aria-label="Explore attractions and events">
          <Link to="/attractions/3">Rainforest Canopy Zip-Line</Link>
          <Link to="/attractions/5">Snorkeling at Merriton Landing</Link>
          <Link to="/attractions/4">Island Charter Fishing</Link>
          <Link to="/attractions/6">Taniti History Museum</Link>
          <Link to="/attractions/7">Island Boat Tour</Link>
          <Link to="/attractions/8">Island Bus Tour</Link>
          <Link to="/events/1">Festival of Lights</Link>
          <Link to="/events/3">Volcano Moon Festival</Link>
          <Link to="/events/6">Heritage Week</Link>
          <Link to="/events/4">Merriton Landing Street Fair</Link>
          <Link to="/attractions">All attractions</Link>
          <Link to="/events">All events</Link>
        </nav>
      </div>
    </Container>
  )
}
