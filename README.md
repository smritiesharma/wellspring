# Wellspring — NGO Demo Website

A 5-page prototype website built for pitching web development services to NGOs.

## Stack
- React 18 + Vite
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- React Router (client-side routing across all 5 pages)
- Lucide React icons
- Mock backend: a `useLocalStorage` hook + simulated async `mockApiCall`
  handle "persistence" for donations, volunteer applications, and contact
  messages — all in the browser, no server required.

## Pages
1. **Home** (`/`) — hero, animated impact counters, core pillars, story previews
2. **About** (`/about`) — mission/vision split, timeline, team grid, fund transparency bars
3. **Campaigns** (`/campaigns`) — filterable project grid with a donation modal that
   updates each project's funding progress live
4. **Get Involved** (`/get-involved`) — 3-step validated volunteer form, openings
   accordion, masonry testimonials
5. **Contact & Donate** (`/contact`) — validated contact form, coordinates + map
   placeholder, one-time/monthly donation checkout with a mock confirmation screen

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Notes
- All images are sourced from Unsplash (free-to-use) via direct URLs.
- All "backend" data (donations, applications, messages, funding progress) is
  stored in the browser's localStorage — clear site data to reset the demo.
- Swap the palette, fonts, and copy in `tailwind.config.js` / `src/data/mockData.js`
  to re-skin this for a specific client pitch.
