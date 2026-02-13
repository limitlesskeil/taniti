import { useParams, Link } from "react-router-dom";
import Container from "../components/Container";
import attractions from "../data/attractions";
import events from "../data/events";
import Section from "../components/Section";
import Card from "../components/Card";

export default function AttractionItem() {
  const { id } = useParams();
  const attractionItem = attractions.find(
    (attraction) => attraction.id === parseInt(id)
  );

  if (!attractionItem) {
    return (
      <Container>
        <p>Attraction not found.</p>
        <Link to="/attractions">Back to attractions</Link>
      </Container>
    );
  }

  // Events held at this attraction (events have attractionId)
  const relatedEvents = events.filter(
    (event) => event.attractionId === attractionItem.id
  );

  // Other attractions in the same location (attractions have location)
  const relatedAttractions = attractions.filter(
    (a) => a.location === attractionItem.location && a.id !== attractionItem.id
  );

  return (
    <Container>
      <h1>{attractionItem.title}</h1>
      {attractionItem.location && (
        <p className="attraction-item__location">{attractionItem.location}</p>
      )}
      <p>{attractionItem.description}</p>
      {attractionItem.price && (
        <p className="attraction-item__price">{attractionItem.price}</p>
      )}
      <img
        src={attractionItem.image}
        alt={attractionItem.title}
        className="attraction-item__image"
      />
      <p className="attraction-item__keywords">
        {attractionItem.keywords?.join(", ")}
      </p>
      {relatedEvents.length > 0 && (
        <Section title="Events at this attraction" className="event-grid">
          {relatedEvents.map((event) => (
            <Card
              key={event.id}
              to={`/events/${event.id}`}
              title={event.title}
              description={event.description}
              image={event.image}
            />
          ))}
        </Section>
      )}
      {relatedAttractions.length > 0 && (
        <Section title="Other attractions nearby" className="attraction-grid">
          {relatedAttractions.map((attraction) => (
            <Card
              key={attraction.id}
              to={`/attractions/${attraction.id}`}
              title={attraction.title}
              description={attraction.description}
              image={attraction.image}
              price={attraction.price}
            />
          ))}
        </Section>
      )}
    </Container>
  );
}
