import { useParams } from "react-router-dom";
import Container from "../components/Container";
import NotFoundMessage from "../components/NotFoundMessage";
import booking from "../data/booking";
import Section from "../components/Section";
import Card from "../components/Card";

export default function BookingItem() {
  const { id } = useParams();
  const bookingItem = booking.find((b) => b.id === parseInt(id, 10));

  if (!bookingItem) {
    return (
      <NotFoundMessage
        message="Property not found."
        backTo="/booking"
        backLabel="Back to properties"
      />
    );
  }

  return (
    <Container>
      <img
        src={bookingItem.image}
        alt={bookingItem.title}
        className="room-item__image"
      />
      <h1>{bookingItem.title}</h1>
      <p>{bookingItem.description}</p>
      <p>{bookingItem.rating}</p>
      <p>{bookingItem.amenities.join(", ")}</p>
      <Section title="Rooms" className="room-grid">
        {bookingItem.rooms.map((room) => (
          <Card
            key={room.id}
            to={`/booking/${bookingItem.id}/room/${room.id}`}
            title={room.name}
            description={room.description}
            price={room.price}
            guests={
              room.maxGuests != null
                ? `${room.maxGuests} guest${room.maxGuests === 1 ? "" : "s"}`
                : undefined
            }
          />
        ))}
      </Section>
    </Container>
  );
}
