import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";
import booking from "../data/booking";
import { useState } from "react";
import FilterSection from "../components/FilterSection";
import ListFilters from "../components/Filter";

function getPriceRange(item) {
  const rooms = item.rooms ?? [];
  const prices = rooms
    .map((r) => parseInt(r.price?.replace(/[^0-9]/g, ""), 10))
    .filter((n) => !isNaN(n));
  if (prices.length === 0) return null;
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? `$${min}/night` : `$${min} – $${max}/night`;
}

function getMinPrice(item) {
  const rooms = item.rooms ?? [];
  const prices = rooms
    .map((r) => parseInt(r.price?.replace(/[^0-9]/g, ""), 10))
    .filter((n) => !isNaN(n));
  return prices.length > 0 ? Math.min(...prices) : null;
}

function getGuestRange(item) {
  const rooms = item.rooms ?? [];
  const guests = rooms
    .map((r) => r.maxGuests)
    .filter((n) => typeof n === "number" && !isNaN(n));
  if (guests.length === 0) return null;
  const min = Math.min(...guests);
  const max = Math.max(...guests);
  return min === max ? `${min} guest${min === 1 ? "" : "s"}` : `${min}–${max} guests`;
}

export default function Booking() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [priceMax, setPriceMax] = useState("");

  const filtered = booking.filter((item) => {
    const matchesCategory =
      selectedFilters.length === 0 ||
      selectedFilters.some(
        (f) => (item.category ?? "").toLowerCase() === f.toLowerCase()
      );
    if (!priceMax.trim()) return matchesCategory;
    const maxVal = parseInt(priceMax, 10);
    if (isNaN(maxVal) || maxVal < 0) return matchesCategory;
    const minPrice = getMinPrice(item);
    if (minPrice === null) return matchesCategory;
    const matchesPrice = minPrice <= maxVal;
    return matchesCategory && matchesPrice;
  });

  return (
    <Container>
      <h1>Booking</h1>
      <div className="filter-page-layout">
        <FilterSection summaryLabel="Filters">
          <ListFilters
            filterLabel="Category"
            filterOptions={[
              { label: "All", value: "all" },
              { label: "Hotel", value: "hotel" },
              { label: "Resort", value: "resort" },
              { label: "Bed and Breakfast", value: "bed and breakfast" },
              { label: "Hostel", value: "hostel" },
            ]}
            selectedValues={selectedFilters}
            onChange={setSelectedFilters}
            showPriceMax
            priceMax={priceMax}
            onPriceMaxChange={setPriceMax}
          />
        </FilterSection>
        <Section title="Properties" className="cardGrid">
          {filtered.map((item, index) => (
            <Card
              key={item.id}
              to={`/booking/${item.id}`}
              title={item.title}
              description={item.description}
              image={item.image}
              price={getPriceRange(item)}
              guests={getGuestRange(item)}
              priority={index === 0}
            />
          ))}
        </Section>
      </div>
    </Container>
  );
}
