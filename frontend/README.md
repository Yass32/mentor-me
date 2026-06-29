# Mentor.me — Web App (Next.js)

A faithful, runnable front-end implementation of the **Mentor.me** design system — a platform connecting junior developers (mentees) with mentors through real-world micro-projects. Built from the 23 approved design mockups.

## Tech stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3** — the exact Material‑3 design tokens from the mockups are ported into `tailwind.config.js` (colors, spacing like `px-lg`, type tokens like `text-page-title`, `max-w-container-max`, etc.)
- **Chart.js** — the mentee dashboard application chart
- **Inter** + **Material Symbols** loaded via Google Fonts at runtime

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## What's included

All 22 routes from the design, fully styled and navigable:

| Area | Routes |
| --- | --- |
| Public | `/`, `/login`, `/register`, `/verify-email`, `/forgot-password`, `/reset-password` |
| Onboarding | `/onboarding` |
| Mentee | `/projects`, `/projects/[id]`, `/dashboard` |
| Mentor | `/my-projects`, `/my-projects/[id]`, `/my-projects/[id]/applicants`, `/my-projects/[id]/edit`, `/create-project`, `/submission-review` |
| Shared | `/messages`, `/profile`, `/profile/[userId]`, `/settings` |
| System | `/error-pages` |

### Demo helpers

- **Floating "Pages" launcher** (bottom-left): jump to any screen and switch the active **role** (mentee/mentor). The role is persisted to `localStorage` and drives the role-aware `/dashboard`.
- **Mentee dashboard** is interactive: clicking the *accepted* application row opens the Accepted Project modal (close via the × button, backdrop, or `Esc`), with working Overview/Submission tabs and a live Chart.js chart.

## Notes & scope

- This is a **front-end implementation with mock data** — there is no backend wired up. Forms, auth, and data are presentational/local, matching the design mockups. The structure is ready for a real API layer (e.g. the NestJS backend described in the PRD).
- The design is reproduced **1:1** from the mockups: the original Tailwind theme is ported into a real config (no CDN), and each page's markup was converted to React components.
- Avatars/illustrations reference external image URLs from the mockups and require an internet connection to display.

## Project structure

```
app/                     # App Router routes (one folder per page)
  layout.jsx             # fonts, globals, providers, page launcher
  globals.css            # Tailwind layers + ported custom CSS (animations, chips, glass, etc.)
  dashboard/page.jsx     # role-aware: renders Mentee or Mentor dashboard
components/
  Providers.jsx          # role context (localStorage-backed)
  PageLauncher.jsx       # floating demo navigator + role switch
  ApplicationChart.jsx   # Chart.js bar chart
  dashboards/            # MenteeDashboard / MentorDashboard
tailwind.config.js       # ported Material-3 design tokens
```
