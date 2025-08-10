import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { vi } from 'vitest';

// Mock router for isolated component testing
export function MockRouter({ children }: { children: React.ReactNode }) {
  return <HashRouter>{children}</HashRouter>;
}

// Custom render function that includes providers
export function renderWithRouter(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: MockRouter, ...options });
}

// Mock navigate function
export const mockNavigate = vi.fn();

// Mock useNavigate hook
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Mock for Zustand stores with initial state
export function createMockStore<T>(initialState: T) {
  let state = initialState;

  return {
    getState: () => state,
    setState: (newState: Partial<T>) => {
      state = { ...state, ...newState };
    },
    subscribe: vi.fn(),
  };
}

// Mock game data for testing
export const mockGameData = {
  players: [
    { name: 'Alice', icon: '😀', wins: 2, losses: 1, gamesPlayed: 3 },
    { name: 'Bob', icon: '😎', wins: 1, losses: 2, gamesPlayed: 3 },
    { name: 'Charlie', icon: '🤔', wins: 1, losses: 1, gamesPlayed: 2 },
  ],
  categories: [
    {
      name: 'Test Category',
      active: true,
      words: [
        { word: 'apple', hint: 'fruit' },
        { word: 'car', hint: 'vehicle' },
        { word: 'book', hint: 'reading' },
      ],
    },
  ],
  settings: {
    numImposters: 1,
    showHints: true,
    roundTimeMinutes: 2,
    votingTimeMinutes: 1,
    allowRandomImposters: false,
    randomImposterChance: 1,
  },
  highscore: {
    Alice: { wins: 2, losses: 1 },
    Bob: { wins: 1, losses: 2 },
    Charlie: { wins: 1, losses: 1 },
  },
};

export const mockGameState = {
  players: mockGameData.players,
  categories: mockGameData.categories,
  imposters: ['Bob'],
  word: 'apple',
  hint: 'fruit',
  startPlayer: 'Alice',
  round: 1,
};

// Helper to wait for async operations
export const waitFor = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Custom matchers can be added here if needed
export * from '@testing-library/react';
export { mockNavigate };
