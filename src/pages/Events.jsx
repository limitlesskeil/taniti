import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";
import events from "../data/events";
import ListFilters from "../components/Filter";
import { useState } from "react";

export default function Events() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filtered = events.filter(
    (item) =>
      "all" === selectedFilter || item.keywords.includes(selectedFilter),
  );

  return (
    <Container>
      <h1>Events</h1>
      <div className="filter-page-layout">
        {/* Filters */}
        <ListFilters
          filterLabel="Filter by type"
          filterOptions={[
            { label: "All", value: "all" },
            { label: "Cultural", value: "cultural" },
            { label: "Family", value: "family" },
            { label: "Water", value: "water" },
            { label: "Nature", value: "nature" },
          ]}
          activeFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
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
