import { useParams } from "react-router-dom";
import Container from "../components/Container";
import booking from "../data/booking";
import Section from "../components/Section";
import Card from "../components/Card";

export default function BookingItem() {
  const { id } = useParams();
  const bookingItem = booking.find((booking) => booking.id === parseInt(id));
  return (
    <Container>
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
            image={bookingItem.image}
            price={room.price}
          />
        ))}
      </Section>
    </Container>
  );
}
