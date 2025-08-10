import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  loadDefaultCategories,
  getDefaultCategories,
  defaultSettings,
  Category,
  GameSettings,
  Player,
  GameState,
} from '../config/defaultSettings';

interface CategoriesSlice {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  resetCategories: () => void;
  initializeCategories: () => Promise<void>;
}

interface SettingsSlice {
  settings: GameSettings;
  setSettings: (settings: GameSettings) => void;
  resetSettings: () => void;
}

interface HighscoreSlice {
  highscore: { [playerName: string]: { wins: number; losses: number } };
  setHighscore: (score: {
    [playerName: string]: { wins: number; losses: number };
  }) => void;
  resetHighscore: () => void;
}

interface PlayersSlice {
  players: Player[];
  setPlayers: (players: Player[]) => void;
  addPlayer: (player: Player) => void;
  removePlayerByName: (name: string) => void;
}

type StateCreator<T> = (set: (partial: Partial<T>) => void, get: () => T) => T;

export const createCategoriesSlice: StateCreator<CategoriesSlice> = (set) => ({
  categories: [],
  setCategories: (categories: Category[]) => set({ categories }),
  resetCategories: async () => {
    const defaultCategories = await loadDefaultCategories();
    set({ categories: defaultCategories });
  },
  initializeCategories: async () => {
    const defaultCategories = await loadDefaultCategories();
    set({ categories: defaultCategories });
  },
});

export const createSettingsSlice: StateCreator<SettingsSlice> = (set) => ({
  settings: defaultSettings,
  setSettings: (settings: GameSettings) => set({ settings }),
  resetSettings: () => set({ settings: defaultSettings }),
});

export const createHighscoreSlice: StateCreator<HighscoreSlice> = (set) => ({
  highscore: {},
  setHighscore: (score: {
    [playerName: string]: { wins: number; losses: number };
  }) => set({ highscore: score }),
  resetHighscore: () => set({ highscore: {} }),
});

export const createPlayerssSlice: StateCreator<PlayersSlice> = (set, get) => ({
  players: [],
  setPlayers: (players: Player[]) => set({ players }),
  addPlayer: (player: Player) => {
    const existing = get().players.some((p: Player) => p.name === player.name);
    if (!existing) {
      set({ players: [...get().players, player] });
    } else {
      console.warn(`Player with name "${player.name}" already exists.`);
    }
  },
  removePlayerByName: (name: string) => {
    const filtered = get().players.filter((p: Player) => p.name !== name);
    set({ players: filtered });
  },
});

interface GameStateStoreSlice {
  gameState: GameState | null;
  setGameState: (gameState: GameState | null) => void;
  resetGame: () => void;
  startGame: (newGameState: GameState) => void;
}

type GamePersistStore = CategoriesSlice &
  SettingsSlice &
  HighscoreSlice &
  PlayersSlice;

export const useGameStateStore = create<GameStateStoreSlice>((set) => ({
  gameState: null,
  setGameState: (gameState: GameState | null) => set({ gameState }),

  resetGame: () =>
    set({
      gameState: null,
    }),

  startGame: (newGameState: GameState) =>
    set({
      gameState: newGameState,
    }),
}));

export const useGamePersistStore = create<GamePersistStore>()(
  persist(
    (set, get) => ({
      ...createCategoriesSlice(set, get as any),
      ...createSettingsSlice(set, get as any),
      ...createHighscoreSlice(set, get as any),
      ...createPlayerssSlice(set, get as any),
    }),
    {
      name: 'imposter-store',
    }
  )
);
