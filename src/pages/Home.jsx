import Container from "../components/Container";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Section from "../components/Section";

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <Hero
        title="Welcome to Taniti Island"
        description="Discover pristine beaches, lush rainforests, and unforgettable adventures on this tropical paradise."
        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
      />
      <Section title="Welcome to Taniti Island">
        <Card
          title="Book Your Stay"
          description="Discover the best attractions and activities on Taniti Island."
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Explore our Sights"
          description="Discover the best attractions and activities on Taniti Island."
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Enjoy out Events"
          description="Discover the best attractions and activities on Taniti Island."
          image="https://via.placeholder.com/150"
        />
      </Section>
    </Container>
  );
}
