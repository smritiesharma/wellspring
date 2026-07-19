# 🌱 Wellspring

### A modern, fully-responsive NGO website prototype — built to *show*, not just tell.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-Routing-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#license)

---

## 📖 Project Overview

**Wellspring** is a polished, 5-page website prototype built for NGOs and nonprofit organizations. It was designed as a **client-pitch template** — a way to demonstrate, in a single running demo, exactly what a modern nonprofit web presence can look and feel like: donation flows, volunteer sign-ups, campaign tracking, and a transparent "About" story — all wrapped in a clean, accessible UI.

> **The problem it solves:** Most NGOs either have outdated, static websites or no online donation/volunteer infrastructure at all. Wellspring provides a realistic, ready-to-demo front-end that developers and agencies can use as a starting point or sales asset — without needing a backend to show real functionality.

The entire app runs **client-side only**. A custom `useLocalStorage` hook and a simulated `mockApiCall` utility handle "persistence" for donations, volunteer applications, and contact messages — meaning the whole experience feels real, with zero server setup required.

---

## ✨ Key Features

- 🏠 **Home Page** — animated impact counters, hero section, core pillars, and story previews
- 📜 **About Page** — mission/vision split, organizational timeline, team grid, and fund transparency bars
- 🎯 **Campaigns Page** — filterable project grid with a donation modal that updates funding progress **live**
- 🙋 **Get Involved Page** — a 3-step validated volunteer application form, an openings accordion, and masonry-style testimonials
- 💳 **Contact & Donate Page** — validated contact form, location/map placeholder, and a one-time/monthly donation checkout with a mock confirmation screen
- 💾 **Mock Backend** — simulated async API calls + `localStorage` persistence, so donations, applications, and messages "save" realistically in the browser
- 📱 **Fully Responsive** — built mobile-first with Tailwind's utility classes
- 🎨 **Easily Re-skinnable** — swap colors, fonts, and copy via config files to reuse for any client pitch

---

## 🛠️ Tech Stack & Tools

| Category            | Technology                                   |
|---------------------|-----------------------------------------------|
| **Frontend Library** | [React 18](https://react.dev/)               |
| **Build Tool**       | [Vite](https://vitejs.dev/)                  |
| **Styling**          | [Tailwind CSS](https://tailwindcss.com/) (custom design tokens) |
| **Routing**          | [React Router](https://reactrouter.com/)     |
| **Icons**            | [Lucide React](https://lucide.dev/)          |
| **State/Persistence**| Custom `useLocalStorage` hook + mock async API layer |
| **Images**           | [Unsplash](https://unsplash.com/) (free-to-use, via direct URLs) |

---

## 📁 Project Structure

```
wellspring/
├── src/
│   ├── components/       # Reusable UI components (navbar, cards, modals, etc.)
│   ├── pages/             # Route-level pages (Home, About, Campaigns, GetInvolved, Contact)
│   ├── hooks/              # Custom hooks (e.g. useLocalStorage)
│   ├── data/                # Mock data (mockData.js) — campaigns, team, testimonials
│   ├── utils/                # Helper functions (mockApiCall, formatters, etc.)
│   └── main.jsx               # App entry point
├── index.html               # HTML entry template
├── tailwind.config.js        # Custom design tokens (colors, fonts, spacing)
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Vite build configuration
├── package.json               # Project dependencies & scripts
└── README.md                   # You are here
```

> **Note:** Exact file names within `src/` may vary slightly — check the [live file tree](https://github.com/smritiesharma/wellspring/tree/main/src) for the most current layout.

---

## 🚀 Installation & Setup

Follow these steps to get Wellspring running locally:

**1. Clone the repository**
```bash
git clone https://github.com/smritiesharma/wellspring.git
cd wellspring
```

**2. Install dependencies**
```bash
npm install
```

**3. Run the development server**
```bash
npm run dev
```

Then open the printed local URL in your browser (usually **http://localhost:5173**).

**4. Build for production**
```bash
npm run build
npm run preview
```

> **💡 Tip:** No environment variables, API keys, or database setup are needed — the entire demo runs in-browser.

---

## 🧭 Usage / Example

Once running, you can explore the app just like a real visitor would:

- Navigate to **`/campaigns`** and click **"Donate"** on any project card — watch the funding progress bar update live.
- Go to **`/get-involved`** and fill out the multi-step volunteer form — your submission is saved to `localStorage`.
- Visit **`/contact`** to submit a message or simulate a one-time/monthly donation checkout.

To re-skin the demo for a specific client pitch, edit:

```js
// tailwind.config.js — update brand colors & fonts
theme: {
  extend: {
    colors: {
      primary: '#YOUR_BRAND_COLOR',
    },
  },
}
```

```js
// src/data/mockData.js — update campaigns, team members, and testimonials
export const campaigns = [
  { title: "Clean Water Initiative", goal: 10000, raised: 4200 },
  // add your own campaigns here
];
```

> **Note:** All "backend" data resets if you clear your browser's site data — this is intentional, since Wellspring has no real server or database.

---

## 🗺️ Future Roadmap

- [ ] Connect a real backend (Node/Express or Firebase) for persistent donations & applications
- [ ] Integrate a real payment gateway (Stripe/Razorpay) for live donation testing
- [ ] Add automated tests (Vitest + React Testing Library)
- [ ] Add dark mode support
- [ ] Deploy a live demo link (Vercel/Netlify) for instant preview
- [ ] Add i18n support for multi-language NGO outreach

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/smritiesharma/wellspring/issues) or open a pull request.

## 📄 License

This project is open source.

---

<p align="center">Made with 💚 to help NGOs tell their story online.</p>
