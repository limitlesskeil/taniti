import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";
import events from "../data/events";
import ListFilters from "../components/Filter";
import { useState } from "react";

export default function Events() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filtered = events.filter(
    (item) =>
      selectedFilters.length === 0 ||
      selectedFilters.some((filter) => item.keywords.includes(filter)),
  );

  return (
    <Container>
      <h1>Events</h1>
      <div className="filter-page-layout">
        {/* Filters */}
        <ListFilters
          filterLabel="Type"
          filterOptions={[
            { label: "All", value: "all" },
            { label: "Cultural", value: "cultural" },
            { label: "Family", value: "family" },
            { label: "Water", value: "water" },
            { label: "Nature", value: "nature" },
          ]}
          selectedValues={selectedFilters}
          onChange={setSelectedFilters}
        />
        {/* List of events */}
        <Section className="cardGrid">
          {filtered.map((item) => (
            <Card
              key={item.id}
              to={`/events/${item.id}`}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </Section>
      </div>
    </Container>
  );
}
