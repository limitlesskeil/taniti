import { useParams } from "react-router-dom";
import Container from "../components/Container";
import NotFoundMessage from "../components/NotFoundMessage";
import attractions from "../data/attractions";
import events from "../data/events";
import Card from "../components/Card";

export default function AttractionItem() {
  const { id } = useParams();
  const attractionItem = attractions.find(
    (attraction) => attraction.id === parseInt(id)
  );

  if (!attractionItem) {
    return (
      <NotFoundMessage
        message="Attraction not found."
        backTo="/attractions"
        backLabel="Back to attractions"
      />
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
        <details className="collapsible-section collapsible-section--events">
          <summary className="collapsible-section__header">
            Events at this attraction ({relatedEvents.length})
          </summary>
          <div className="collapsible-section__content event-grid">
            {relatedEvents.map((event) => (
              <Card
                key={event.id}
                to={`/events/${event.id}`}
                title={event.title}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
        </details>
      )}
      {relatedAttractions.length > 0 && (
        <details className="collapsible-section collapsible-section--attractions">
          <summary className="collapsible-section__header">
            Other attractions nearby ({relatedAttractions.length})
          </summary>
          <div className="collapsible-section__content attraction-grid">
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
          </div>
        </details>
      )}
    </Container>
  );
}
