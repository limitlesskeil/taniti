import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";
import attractions from "../data/attractions";
import { useState } from "react";
import ListFilters from "../components/Filter";

export default function Attractions() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filtered = attractions.filter(
    (item) =>
      "all" === selectedFilter || item.keywords.includes(selectedFilter),
  );

  return (
    <Container>
      <h1>Attractions</h1>
      <div className="filter-page-layout">
        {/* Filters */}
        <ListFilters
          filterLabel="Filter by type"
          filterOptions={[
            { label: "All", value: "all" },
            { label: "Beach", value: "beach" },
            { label: "Hiking", value: "hiking" },
          ]}
          activeFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
        {/* List of attractions */}
        <Section className="cardGrid">
          {filtered.map((item) => (
            <Card
              key={item.id}
              to={`/attractions/${item.id}`}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
        </Section>
      </div>
    </Container>
  );
}
