import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useGameStateStore, useGamePersistStore } from '../useGameStore';
import {
  defaultSettings,
  loadDefaultCategories,
  type Player,
  type GameState,
  type Category,
} from '../../config/defaultSettings';

// Mock localStorage for Zustand persist
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = localStorageMock as any;

// Mock categories for testing
const mockCategories: Category[] = [
  {
    name: 'Test Category 1',
    active: true,
    words: [
      { word: 'test1', hint: 'hint1' },
      { word: 'test2', hint: 'hint2' },
    ],
  },
  {
    name: 'Test Category 2',
    active: false,
    words: [{ word: 'test3', hint: 'hint3' }],
  },
];

// Mock the loadDefaultCategories function
vi.mock('../../config/defaultSettings', async () => {
  const actual = await vi.importActual('../../config/defaultSettings');
  return {
    ...actual,
    loadDefaultCategories: vi.fn().mockResolvedValue(mockCategories),
  };
});

describe('useGameStateStore', () => {
  beforeEach(() => {
    // Reset store state
    useGameStateStore.getState().resetGame();
  });

  it('should initialize with null gameState', () => {
    const { result } = renderHook(() => useGameStateStore());
    expect(result.current.gameState).toBeNull();
  });

  it('should set game state', () => {
    const { result } = renderHook(() => useGameStateStore());
    const mockGameState: GameState = {
      players: [],
      categories: [],
      imposters: ['player1'],
      word: 'test',
      hint: 'hint',
      round: 1,
    };

    act(() => {
      result.current.setGameState(mockGameState);
    });

    expect(result.current.gameState).toEqual(mockGameState);
  });

  it('should start a new game', () => {
    const { result } = renderHook(() => useGameStateStore());
    const mockGameState: GameState = {
      players: [{ name: 'Player 1', wins: 0, losses: 0, gamesPlayed: 0 }],
      categories: mockCategories,
      imposters: ['Player 1'],
      word: 'test word',
      hint: 'test hint',
      round: 1,
    };

    act(() => {
      result.current.startGame(mockGameState);
    });

    expect(result.current.gameState).toEqual(mockGameState);
    expect(result.current.gameState?.imposters).toContain('Player 1');
  });

  it('should reset game state', () => {
    const { result } = renderHook(() => useGameStateStore());
    const mockGameState: GameState = {
      players: [],
      categories: [],
      imposters: ['player1'],
      word: 'test',
      round: 1,
    };

    act(() => {
      result.current.setGameState(mockGameState);
    });

    act(() => {
      result.current.resetGame();
    });

    expect(result.current.gameState).toBeNull();
  });
});

describe('useGamePersistStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  it('should initialize with default settings', () => {
    const { result } = renderHook(() => useGamePersistStore());
    expect(result.current.settings).toEqual(defaultSettings);
  });

  it('should initialize with empty categories', () => {
    const { result } = renderHook(() => useGamePersistStore());
    expect(result.current.categories).toEqual([]);
  });

  it('should initialize with empty players array', () => {
    const { result } = renderHook(() => useGamePersistStore());
    expect(result.current.players).toEqual([]);
  });

  it('should initialize with empty highscore object', () => {
    const { result } = renderHook(() => useGamePersistStore());
    expect(result.current.highscore).toEqual({});
  });

  it('should add a player', () => {
    const { result } = renderHook(() => useGamePersistStore());
    const newPlayer: Player = {
      name: 'Test Player',
      icon: '😀',
      wins: 0,
      losses: 0,
      gamesPlayed: 0,
    };

    act(() => {
      result.current.addPlayer(newPlayer);
    });

    expect(result.current.players).toContainEqual(newPlayer);
  });

  it('should not add duplicate player by name', () => {
    const { result } = renderHook(() => useGamePersistStore());
    const player1: Player = {
      name: 'Test Player',
      icon: '😀',
      wins: 0,
      losses: 0,
      gamesPlayed: 0,
    };
    const player2: Player = {
      name: 'Test Player', // Same name
      icon: '😎',
      wins: 1,
      losses: 0,
      gamesPlayed: 1,
    };

    act(() => {
      result.current.addPlayer(player1);
      result.current.addPlayer(player2);
    });

    expect(result.current.players).toHaveLength(1);
    expect(result.current.players[0]).toEqual(player1);
  });

  it('should remove player by name', () => {
    const { result } = renderHook(() => useGamePersistStore());
    const player1: Player = {
      name: 'Player 1',
      icon: '😀',
      wins: 0,
      losses: 0,
      gamesPlayed: 0,
    };
    const player2: Player = {
      name: 'Player 2',
      icon: '😎',
      wins: 0,
      losses: 0,
      gamesPlayed: 0,
    };

    act(() => {
      result.current.addPlayer(player1);
      result.current.addPlayer(player2);
    });

    expect(result.current.players).toHaveLength(2);

    act(() => {
      result.current.removePlayerByName('Player 1');
    });

    expect(result.current.players).toHaveLength(1);
    expect(result.current.players[0].name).toBe('Player 2');
  });

  it('should update settings', () => {
    const { result } = renderHook(() => useGamePersistStore());
    const newSettings = {
      ...defaultSettings,
      numImposters: 2,
      roundTimeMinutes: 5,
    };

    act(() => {
      result.current.setSettings(newSettings);
    });

    expect(result.current.settings).toEqual(newSettings);
  });

  it('should reset settings to default', () => {
    const { result } = renderHook(() => useGamePersistStore());
    const newSettings = {
      ...defaultSettings,
      numImposters: 5,
    };

    act(() => {
      result.current.setSettings(newSettings);
    });

    act(() => {
      result.current.resetSettings();
    });

    expect(result.current.settings).toEqual(defaultSettings);
  });

  it('should update highscore', () => {
    const { result } = renderHook(() => useGamePersistStore());
    const newHighscore = {
      'Player 1': { wins: 3, losses: 1 },
      'Player 2': { wins: 2, losses: 2 },
    };

    act(() => {
      result.current.setHighscore(newHighscore);
    });

    expect(result.current.highscore).toEqual(newHighscore);
  });

  it('should set players list', () => {
    const { result } = renderHook(() => useGamePersistStore());
    const players: Player[] = [
      { name: 'Player 1', icon: '😀', wins: 1, losses: 0, gamesPlayed: 1 },
      { name: 'Player 2', icon: '😎', wins: 0, losses: 1, gamesPlayed: 1 },
    ];

    act(() => {
      result.current.setPlayers(players);
    });

    expect(result.current.players).toEqual(players);
  });

  it('should update categories', () => {
    const { result } = renderHook(() => useGamePersistStore());
    const newCategories = [
      {
        name: 'Test Category',
        active: true,
        words: [
          { word: 'test1', hint: 'hint1' },
          { word: 'test2', hint: 'hint2' },
        ],
      },
    ];

    act(() => {
      result.current.setCategories(newCategories);
    });

    expect(result.current.categories).toEqual(newCategories);
  });

  it('should initialize categories from loadDefaultCategories', async () => {
    const { result } = renderHook(() => useGamePersistStore());

    await act(async () => {
      await result.current.initializeCategories();
    });

    expect(result.current.categories).toEqual(mockCategories);
  });

  it('should reset categories to default', async () => {
    const { result } = renderHook(() => useGamePersistStore());
    const newCategories = [
      {
        name: 'Test Category',
        active: true,
        words: [{ word: 'test', hint: 'hint' }],
      },
    ];

    act(() => {
      result.current.setCategories(newCategories);
    });

    await act(async () => {
      await result.current.resetCategories();
    });

    expect(result.current.categories).toEqual(mockCategories);
  });
});
