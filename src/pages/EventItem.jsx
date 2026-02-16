import { useParams, Link } from "react-router-dom";
import events from "../data/events";
import attractions from "../data/attractions";
import Container from "../components/Container";
import NotFoundMessage from "../components/NotFoundMessage";

export default function EventItem() {
  const { id } = useParams();
  const eventItem = events.find((event) => event.id === parseInt(id));

  if (!eventItem) {
    return (
      <NotFoundMessage
        message="Event not found."
        backTo="/events"
        backLabel="Back to events"
      />
    );
  }

  const relatedAttraction = eventItem.attractionId
    ? attractions.find((a) => a.id === eventItem.attractionId)
    : null;

  return (
    <Container>
      <h1>{eventItem.title}</h1>
      <img
        src={eventItem.image}
        alt={eventItem.title}
        className="event-item__image"
      />
      <p>{eventItem.description}</p>
      {eventItem.date && <p className="event-item__meta">{eventItem.date}</p>}
      {eventItem.location && (
        <p className="event-item__meta">{eventItem.location}</p>
      )}
      {eventItem.keywords?.length > 0 && (
        <p className="event-item__keywords">
          {eventItem.keywords.join(", ")}
        </p>
      )}
      {relatedAttraction && (
        <p>
          <Link to={`/attractions/${relatedAttraction.id}`}>
            Related: {relatedAttraction.title}
          </Link>
        </p>
      )}
    </Container>
  );
}
