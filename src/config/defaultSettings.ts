export interface Word {
  word: string;
  hint: string;
}

export interface Category {
  name: string;
  active: boolean;
  words: Word[];
}

export interface GameSettings {
  numImposters: number;
  showHints: boolean;
  roundTimeMinutes: number;
  votingTimeMinutes: number;
  allowRandomImposters: boolean;
  randomImposterChance: number;
  showInstructions?: boolean;
}

export interface Player {
  name: string;
  avatar?: string;
  icon?: string;
  wins: number;
  losses: number;
  gamesPlayed: number;
}

export interface GameState {
  players: Player[];
  categories: Category[];
  imposters: string[];
  currentWord?: Word;
  word?: string;
  hint?: string;
  startPlayer?: string;
  round?: number;
  selectedPlayers?: string[];
  votingResults?: { [playerName: string]: string };
}

export const defaultSettings: GameSettings = {
  numImposters: 1,
  showHints: true,
  roundTimeMinutes: 2,
  votingTimeMinutes: 0,
  allowRandomImposters: false,
  randomImposterChance: 1,
};

// Categories are now loaded from external JSON file
let _categoriesCache: Category[] | null = null;

export const loadDefaultCategories = async (): Promise<Category[]> => {
  if (_categoriesCache) {
    return _categoriesCache;
  }

  try {
    const response = await fetch('/imposter-party/data/categories.json');
    if (!response.ok) {
      throw new Error('Failed to load categories');
    }
    _categoriesCache = await response.json();
    return _categoriesCache;
  } catch (error) {
    console.warn('Failed to load categories from JSON, using fallback:', error);
    // Fallback categories in case JSON loading fails
    _categoriesCache = [
      {
        name: 'Fallback Category',
        active: true,
        words: [{ word: 'Test', hint: 'Fallback word' }],
      },
    ];
    return _categoriesCache;
  }
};

// For backward compatibility - synchronous access (use loadDefaultCategories for new code)
export const getDefaultCategories = (): Category[] => {
  return _categoriesCache || [];
};
