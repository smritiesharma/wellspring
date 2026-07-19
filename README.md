# Wellspring — NGO Demo Website

A 5-page website template I built to show NGOs what a modern, donor-friendly site could look like. No backend — everything runs client-side so it's easy to demo and easy to fork for a real pitch.

## Stack

- React 18 + Vite
- Tailwind CSS (custom design tokens in `tailwind.config.js`)
- React Router for client-side navigation
- Lucide React for icons
- A `useLocalStorage` hook + a mock async API fake "persist" donations, volunteer applications, and contact messages in the browser

## Pages

1. **Home** (`/`) — hero, animated impact counters, core pillars, story previews
2. **About** (`/about`) — mission/vision, timeline, team grid, fund transparency bars
3. **Campaigns** (`/campaigns`) — filterable project grid; a donation modal updates each project's funding progress live
4. **Get Involved** (`/get-involved`) — 3-step volunteer form with validation, an openings accordion, masonry testimonials
5. **Contact & Donate** (`/contact`) — contact form, map placeholder, one-time/monthly donation checkout with a mock confirmation screen

## Running it locally
