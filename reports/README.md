# Lighthouse Reports

This folder contains Lighthouse performance reports for the Taniti site.

## Getting Accurate Scores

**Important:** Run Lighthouse against a **production build**, not the dev server.

1. Build the site: `npm run build`
2. Preview the build: `npm run preview`
3. Run Lighthouse against the preview URL (e.g. `http://localhost:4173`)

The dev server (`npm run dev`) serves unminified JavaScript, HMR, and dev tools, which inflates payload size and hurts scores. Production builds are minified and optimized.

## Recent Fixes (from lighthouse.json analysis)

- **LCP (Largest Contentful Paint):** Above-the-fold images now use `loading="eager"` and `fetchPriority="high"` instead of lazy loading
- **Card component:** Added `priority` prop for first items in grids (Attractions, Events, Booking, Home)
- **Hero:** Hero image uses `fetchPriority="high"` for faster LCP on the home page
