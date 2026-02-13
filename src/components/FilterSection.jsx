import { useState, useEffect } from "react";

/**
 * Wraps filters in a collapsible section for mobile.
 * On mobile: collapsed by default, tap to expand. Content (items) shows first.
 * On desktop: sidebar layout, filters always visible.
 */
export default function FilterSection({ summaryLabel = "Filters", children }) {
  const [isDesktop, setIsDesktop] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches,
  );
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const isOpen = isDesktop || isOpenMobile;

  return (
    <details
      className="filter-page-layout__filters-details"
      open={isOpen}
      onToggle={(e) => {
        if (!isDesktop) setIsOpenMobile(e.target.open);
      }}>
      <summary
        className="filter-page-layout__filters-summary"
        aria-expanded={isOpen}>
        {summaryLabel}
      </summary>
      <div className="filter-page-layout__filters-inner">{children}</div>
    </details>
  );
}
