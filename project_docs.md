# Next Again - Project Documentation

## 1. Project Overview
**Next Again** is a movie discovery web application that began as a clone coding project associated with "Nomad Coders Next.js for Beginners". It has since been significantly refactored and enhanced using **Antigravity**, transforming previous work into a modern application with polished UI/UX, strict type safety, and efficient data fetching.

## 2. Technology Stack
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) (Turbopack enabled)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Data Source**: TMDB API

## 3. Key Features

### 🏠 Home Page (`/`)
- **Trending Contents**: Displays a grid of currently trending contents.
- **Dynamic Background**: Randomly selects a backdrop from the fetched movies for an immersive header effect.
- **Card Flip Animation**: Movie cards flip on hover to reveal details (Year, Rating) with a smooth 3D transform.

### 🎬 Content Detail Page (`/content/[id]`)
- **Immersive Header**: Large backdrop image with gradient overlay, title, and tagline.
- **Info Grid**: Displays Poster, Rating, Release Date, Runtime, Genres, Countries, and Spoken Languages.
- **Tabbed Navigation**:
    - **Videos**: YouTube trailers and teasers (embedded).
    - **Credits**: Cast and crew list with IMDB search links.
    - **Providers**: Streaming, Rent, and Buy options (powered by JustWatch/TMDB).
    - **Similar**: Recommendations based on the current movie.
- **External Links**: Direct links to Official Homepage and IMDB.

### 🛠 UI/UX Enhancements
- **Dark Mode Aesthetic**: Sleek, dark-themed UI with glassmorphism effects (`backdrop-blur`).
- **Smooth Scrolling**: Implemented continuously, with a smart "Scroll to Top" on navigation that avoids tab-switching interruptions.
- **Loading Skeletons**: Custom skeletons (`GridSkeleton`, `VideoSkeleton`, `BannerSkeleton`) for all data-fetching states using React Suspense.
- **Error Handling**: Custom styled `error.tsx` and `not-found.tsx` pages with recovery options.

## 4. Project Structure
```
next-again/
├── app/
│   ├── (home)/              # Home route group
│   │   ├── page.tsx         # Main landing page
│   │   └── loading.tsx      # Home skeleton loader
│   ├── (content)/content/[id]/ # Dynamic movie detail routes
│   │   ├── page.tsx         # Defaults to 'video' tab
│   │   ├── credits/         # Credits tab route
│   │   ├── providers/       # Providers tab route
│   │   ├── similar/         # Similar movies tab route
│   │   ├── layout.tsx       # Shared layout (Header, Nav) for details
│   │   └── error.tsx        # Error boundary
│   ├── about/               # About page
│   ├── layout.tsx           # Root layout (Html, Body, ScrollToTop)
│   ├── globals.css          # Global styles & Tailwind
│   └── not-found.tsx        # 404 Page
├── components/
│   ├── content-card.tsx     # Movie Card component
│   ├── content-info.tsx     # Movie Info component
│   ├── skeleton.tsx         # Loading UI components
│   ├── tab-content.tsx      # Tab Logic
│   └── tabs/                # Individual Tab Components
├── lib/
│   ├── getApiData.ts        # Generic API Fetcher
│   └── metadata.ts          # Shared Metadata Helper
└── types/
    └── tmdb.ts              # Strict TypeScript Interfaces
```

## 5. Recent Improvements
- **Type Safety**: Refactored `getApiData` to use TypeScript Generics and defined comprehensive interfaces in `types/tmdb.ts` to eliminate `any` types.
- **Refactoring**: Centralized metadata generation logic in `lib/metadata.ts` to reduce code duplication across dynamic routes.
- **Configuration**: Cleaned up `package.json` to correctly categorize dependencies (Moved `postcss`, `tailwindcss` to devDependencies).
- **Bug Fixes**: optimizing Scroll-to-Top behavior for reliable navigation.

## 6. Development & Collaboration
This project was built through a collaborative process between the **User (Product Owner/Designer)** and **Antigravity (AI Developer)**.

- **User**:
    - **Concept & Vision**: Defined the application's purpose, flow, and "wow" factor aesthetics.
    - **Design Direction**: Directed the visual style (Dark Mode, Glassmorphism, Animations) and UX interactions (Flip Cards, Tabbed Layouts).
    - **Requirement Engineering**: Specified features, data structures, and ongoing refinements.
    
- **Antigravity (AI)**:
    - **Implementation**: Wrote the core application code in React/Next.js and TypeScript.
    - **Refactoring & Optimization**: Enforced Type Safety, modularized components, and implemented efficient data fetching patterns.
    - **Technical Problem Solving**: Resolved issues with scrolling behavior, styling quirks, and build configurations.
