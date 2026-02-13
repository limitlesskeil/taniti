import { useParams, Link } from "react-router-dom";
import Container from "../components/Container";
import NotFoundMessage from "../components/NotFoundMessage";
import booking from "../data/booking";

export default function RoomItem() {
  const { id, roomId } = useParams();
  const property = booking.find((b) => b.id === parseInt(id));
  const room = property?.rooms?.find((r) => r.id === roomId);

  if (!property || !room) {
    return (
      <NotFoundMessage
        message="Room not found."
        backTo="/booking"
        backLabel="Back to property"
      />
    );
  }

  return (
    <Container>
      <Link to={`/booking/${id}`} className="back-link">
        ← Back to {property.title}
      </Link>
      <h1>{room.name}</h1>
      <p className="room-item__property">{property.title}</p>
      <img src={property.image} alt={room.name} className="room-item__image" />
      <p className="room-item__price">{room.price}</p>
      <p>Up to {room.maxGuests} guests</p>
      <p>{room.description}</p>
    </Container>
  );
}
