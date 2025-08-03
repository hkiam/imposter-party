import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { defaultCategories, defaultSettings } from '../config/defaultSettings';

export const createCategoriesSlice = (set) => ({
  categories: defaultCategories,
  setCategories: (categories) => set({ categories }),
  resetCategories: () => set({ categories: defaultCategories }),
});
export const createSettingsSlice = (set) => ({
  settings: defaultSettings,
  setSettings: (settings) => set({ settings }),
  resetSettings: () => set({ settings: defaultSettings }),
});

export const createHighscoreSlice = (set) => ({
  highscore: {},
  setHighscore: (score) => set({ highscore: score }),
  resetHighscore: () => set({ highscore: {} }),
});

export const createPlayerssSlice = (set, get) => ({
  players: [],
  setPlayers: (players) => set({ players }),
  addPlayer: (player) => {
    const existing = get().players.some((p) => p.name === player.name);
    if (!existing) {
      set({ players: [...get().players, player] });
    } else {
      console.warn(`Player with name "${player.name}" already exists.`);
    }
  },
  removePlayerByName: (name) => {
    const filtered = get().players.filter((p) => p.name !== name);
    set({ players: filtered });
  },
});

export const useGameStateStore = create((set) => ({
  phase: 'setup',
  gameState: null,

  setPhase: (phase) => set({ phase }),
  setGameState: (gameState) => set({ gameState }),

  resetGame: () =>
    set({
      gameState: null,
      phase: 'setup',
    }),

  startGame: (newGameState) =>
    set({
      gameState: newGameState,
      phase: 'reveal',
    }),
}));

export const useGamePersistStore = create(
  persist(
    (...a) => ({
      ...createCategoriesSlice(...a),
      ...createSettingsSlice(...a),
      ...createHighscoreSlice(...a),
      ...createPlayerssSlice(...a),
    }),
    {
      name: 'imposter-store',
    }
  )
);
