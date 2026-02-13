import Container from "../components/Container";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Section from "../components/Section";

export default function Home() {
  return (
    <Container>
      <Hero
        title="Welcome to Taniti Island"
        description="Discover pristine beaches, lush rainforests, and unforgettable adventures on this tropical paradise."
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
      />
      <Section
        title="Explore"
        className="cardGrid cardGrid--home">
        <Card
          title="Book Your Stay"
          description="Book your stay at one of our beautiful hotels."
          image="https://images.unsplash.com/photo-1647729008051-67102d7284f4?w=600&q=80"
          to="/booking"
          priority
        />
        <Card
          title="Explore our Sights"
          description="Find the most amazing views on Taniti Island."
          image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80"
          to="/attractions"
        />
        <Card
          title="Enjoy our Events"
          description="Join us for one of our amazing events."
          image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80"
          to="/events"
        />
      </Section>
    </Container>
  );
}
