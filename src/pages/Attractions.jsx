import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";
import attractions from "../data/attractions";
import { useState } from "react";
import FilterSection from "../components/FilterSection";
import ListFilters from "../components/Filter";

function parsePrice(priceStr) {
  if (!priceStr) return null;
  if (priceStr.toLowerCase() === "free") return 0;
  if (priceStr.toLowerCase() === "varies") return null;
  const num = parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  return isNaN(num) ? null : num;
}

export default function Attractions() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [priceMax, setPriceMax] = useState("");

  const filtered = attractions.filter((item) => {
    const matchesKeywords =
      selectedFilters.length === 0 ||
      selectedFilters.some((f) => item.keywords?.includes(f));
    if (!priceMax.trim()) return matchesKeywords;
    const maxVal = parseInt(priceMax, 10);
    if (isNaN(maxVal) || maxVal < 0) return matchesKeywords;
    const price = parsePrice(item.price);
    if (price === null) return matchesKeywords;
    const matchesPrice = price <= maxVal;
    return matchesKeywords && matchesPrice;
  });

  return (
    <Container>
      <h1>Attractions</h1>
      <div className="filter-page-layout">
        <FilterSection summaryLabel="Filters">
          <ListFilters
            filterLabel="Type"
            filterOptions={[
              { label: "All", value: "all" },
              { label: "Beach", value: "beach" },
              { label: "Hiking", value: "hiking" },
              { label: "Culture", value: "culture" },
              { label: "Water", value: "water" },
              { label: "Nature", value: "nature" },
            ]}
            selectedValues={selectedFilters}
            onChange={setSelectedFilters}
            showPriceMax
            priceMax={priceMax}
            onPriceMaxChange={setPriceMax}
            priceMaxLabel="Max price per person"
            priceMaxPlaceholder="e.g. 50"
          />
        </FilterSection>
        {/* List of attractions */}
        <Section className="cardGrid">
          {filtered.map((item, index) => (
            <Card
              key={item.id}
              to={`/attractions/${item.id}`}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              priority={index === 0}
            />
          ))}
        </Section>
      </div>
    </Container>
  );
}
