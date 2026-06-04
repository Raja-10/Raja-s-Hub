# Raja's Hub — Personal Portfolio

A modern, dark-themed portfolio built using Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

The goal of this project is to showcase:

* Academic achievements
* Research interests
* Technical projects
* Swimming and extracurricular activities
* Travel experiences
* Personal milestones and memories

---

# Tech Stack

## Frontend

* Next.js 14
* React 18
* TypeScript

## Styling

* Tailwind CSS 3
* Custom Glassmorphism UI
* Dark Theme

## Animation

* Framer Motion
* Lenis Smooth Scrolling
* Intersection Observer Animations

---

# Project Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   │
│   ├── ui/
│   │   ├── BentoCard.tsx
│   │   ├── CursorGlow.tsx
│   │   ├── Section.tsx
│   │   └── SectionLabel.tsx
│   │
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Academics.tsx
│       ├── Research.tsx
│       ├── Projects.tsx
│       ├── Swimming.tsx
│       ├── Travel.tsx
│       ├── Achievements.tsx
│       ├── Memories.tsx
│       └── Contact.tsx
│
├── hooks/
│   └── useScrollReveal.ts
│
└── lib/
    └── utils.ts
```

---

# Configuration Files

## package.json

Contains:

* Project metadata
* Dependencies
* Scripts

Important commands:

```bash
npm run dev
npm run build
npm run start
```

---

## next.config.js

Purpose:

* Next.js configuration
* Image domain allowlist
* Build optimization settings

Currently:

* Allows Unsplash image domains
* Disables CSS optimization

---

## tailwind.config.ts

Purpose:

Custom design system.

Defines:

* Theme colors
* Typography
* Breakpoints
* Animations
* Keyframes
* Background utilities

Custom colors:

* background
* foreground
* accent
* accent-light
* accent-dim

---

## postcss.config.js

Purpose:

Enables:

* Tailwind CSS
* Autoprefixer

---

## tsconfig.json

Purpose:

TypeScript compiler configuration.

Features:

* Strict mode
* Path aliases

```ts
@/*
```

maps to:

```text
src/*
```

Example:

```ts
import Hero from '@/components/sections/Hero'
```

---

# Application Layer

## app/layout.tsx

Root application wrapper.

Responsibilities:

* HTML shell
* Metadata
* SEO
* OpenGraph tags
* Global styles

Loaded once for the entire application.

---

## app/page.tsx

Main landing page.

Responsibilities:

* Initialize Lenis smooth scrolling
* Render all website sections
* Assemble page layout

Rendering order:

```text
Hero
About
Academics
Research
Projects
Swimming
Travel
Achievements
Memories
Contact
Footer
```

---

# Utility Layer

## lib/utils.ts

Contains:

```ts
cn(...)
```

Purpose:

Merge Tailwind classes safely.

Uses:

* clsx
* tailwind-merge

Example:

```ts
cn('text-white', isActive && 'bg-accent')
```

---

# Hooks

## useScrollReveal.ts

Custom animation hook.

Uses:

* react-intersection-observer

Purpose:

Detect when components enter viewport.

Returns:

```ts
{
  ref,
  inView
}
```

Used by:

* Section component
* Animated sections

---

# UI Components

## CursorGlow.tsx

Purpose:

Interactive mouse-following glow effect.

Features:

* Tracks mouse position
* Creates futuristic UI feel

---

## Section.tsx

Purpose:

Reusable section wrapper.

Features:

* Fade-in animation
* Scroll reveal
* Consistent spacing

Used for every major page section.

---

## SectionLabel.tsx

Purpose:

Small section heading.

Example:

```text
About Me
Academics
Research
```

Provides:

* Accent line
* Monospace label
* Consistent styling

---

## BentoCard.tsx

Purpose:

Reusable glassmorphism card.

Features:

* Hover effects
* Fade animations
* Glow effects
* Consistent card styling

Used throughout the portfolio.

---

# Navigation

## Navbar.tsx

Responsibilities:

* Desktop navigation
* Mobile navigation
* Active section tracking
* Smooth scrolling

Features:

* Animated appearance
* Mobile hamburger menu
* Contact button
* Section highlighting

---

# Sections

## Hero.tsx

Landing page.

Features:

* Large animated name
* Tagline
* Social links
* Scroll indicator
* Background effects
* Life timeline

Purpose:

First impression of the portfolio.

---

## About.tsx

Personal introduction.

Contains:

* Biography
* Philosophy
* Core values
* Quick statistics

Purpose:

Introduce personality and motivations.

---

## Academics.tsx

Academic overview.

Contains:

* CGPA display
* Semester progress chart
* Course highlights
* Educational background

Purpose:

Show academic performance and learning trajectory.

---

## Research.tsx

Planned Section

Purpose:

* Research interests
* Publications
* Reading list
* Future directions

---

## Projects.tsx

Planned Section

Purpose:

* Technical portfolio
* Robotics projects
* Software projects
* Open-source work

---

## Swimming.tsx

Planned Section

Purpose:

* Swimming journey
* Competitions
* Achievements
* Personal growth

---

## Travel.tsx

Planned Section

Purpose:

* Countries visited
* Experiences
* Photography
* Travel memories

---

## Achievements.tsx

Planned Section

Purpose:

* Awards
* Scholarships
* Recognition
* Certifications

---

## Memories.tsx

Planned Section

Purpose:

Life highlights and important moments.

---

## Contact.tsx

Planned Section

Purpose:

* Email
* Social links
* Collaboration opportunities

---

# Design Philosophy

The website is designed around three ideas:

## Researcher

Academic work, exploration, learning.

## Builder

Projects, engineering, software.

## Explorer

Travel, swimming, life experiences.

---

# Future Improvements

* Blog integration
* Publication management
* Dynamic CMS
* Dark/Light theme toggle
* Project filtering
* Research timeline
* Interactive travel map
* GitHub activity integration

---

# Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```
