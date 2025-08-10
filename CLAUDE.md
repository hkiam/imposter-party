# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Imposter Party is a browser-based party game built as a Progressive Web App (PWA). Players try to identify the "imposter" who doesn't know the secret word. The app is built with React, TypeScript, Vite, TailwindCSS, and includes offline functionality.

## Development Commands

```bash
# Development
npm install          # Install dependencies
npm run dev         # Start development server (http://localhost:5173)

# TypeScript
npm run type-check  # Run TypeScript type checking
npm run build       # TypeScript compile + Vite build for production
npm run preview     # Preview production build locally

# Code Formatting
# Prettier is configured with lint-staged for auto-formatting on commit
```

## Architecture Overview

### State Management

- **Zustand** for state management with two main stores:
  - `useGamePersistStore`: Persistent data (categories, settings, players, highscores) saved to localStorage
  - `useGameStateStore`: Temporary game state that resets between games

### Routing & Screens

- **React Router** with HashRouter for GitHub Pages compatibility
- Main game flow: Setup → Categories → Reveal → Play → Voting → End
- All screens are in `src/screens/`

### Key Components Structure

- `src/App.tsx`: Main router configuration
- `src/screens/`: Game flow screens (GameSetupScreen, RevealWordScreen, etc.)
- `src/components/ui/`: Reusable UI components
- `src/state/useGameStore.ts`: Zustand store definitions with TypeScript types
- `src/config/defaultSettings.ts`: Default game categories and settings with type interfaces

### PWA Configuration

- Configured via `vite-plugin-pwa` in `vite.config.js`
- Offline-first with service worker registration
- Includes app manifest and PWA icons

### Styling

- **TailwindCSS** for styling
- **Framer Motion** for animations
- Component styling follows Tailwind utility-first approach

## Game Data Structure

### Players

Each player has: `{ name, avatar, icon, wins, losses, gamesPlayed }`

### Categories

Structure: `{ name, active, words: [{ word, hint }] }`

### Game State

Contains current game info: players, categories, imposter assignments, current word, voting results

## Deployment

The project uses a custom GitHub Pages deployment:

1. `npm run build` creates production build in `dist/`
2. Copy `dist/` to `docs/` for GitHub Pages
3. Base path is configured as `/imposter-party/` in `vite.config.js`

## Local Storage

The app persists user data locally:

- Player profiles and stats
- Custom categories
- Game settings
- High scores

Data is stored under the key `imposter-store` via Zustand persist middleware.

## Testing

The project includes comprehensive automated testing:

**Test Commands:**

```bash
npm test              # Run tests in watch mode
npm run test:run      # Run tests once
npm run test:coverage # Run with coverage report
npm run test:e2e      # Run E2E tests
npm run test:all      # Run all tests
```

**Test Structure:**

- **Unit Tests**: Components, stores, utilities (`src/**/__tests__/*.test.ts(x)`)
- **Integration Tests**: Screen components with mocked dependencies
- **E2E Tests**: Complete user workflows (`tests/e2e/*.spec.ts`)
- **Coverage**: V8 provider with 70% thresholds for all metrics

**Key Features:**

- TypeScript support in all tests
- Mock implementations for PWA/Service Worker APIs
- Accessibility testing with Playwright
- Performance benchmarking
- CI/CD integration with GitHub Actions

See `TESTING.md` for detailed testing documentation.

## TypeScript Configuration

The project has been converted from JavaScript to TypeScript:

- All `.jsx` files converted to `.tsx`
- Type interfaces defined for game state, players, categories, and settings
- TypeScript compiler configured with relaxed strict mode for gradual adoption
- Zustand stores fully typed with proper interfaces
- Component props properly typed with React.ReactElement return types
