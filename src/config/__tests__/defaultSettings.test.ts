import { describe, it, expect, beforeAll, vi } from 'vitest';
import {
  defaultSettings,
  loadDefaultCategories,
  getDefaultCategories,
  type GameSettings,
  type Category,
  type Word,
  type Player,
} from '../defaultSettings';

describe('defaultSettings', () => {
  it('should have correct default values', () => {
    expect(defaultSettings).toEqual({
      numImposters: 1,
      showHints: true,
      roundTimeMinutes: 2,
      votingTimeMinutes: 0,
      allowRandomImposters: false,
      randomImposterChance: 1,
    });
  });

  it('should match GameSettings interface', () => {
    const settings: GameSettings = defaultSettings;
    expect(settings.numImposters).toBeGreaterThan(0);
    expect(typeof settings.showHints).toBe('boolean');
    expect(settings.roundTimeMinutes).toBeGreaterThanOrEqual(0);
    expect(settings.votingTimeMinutes).toBeGreaterThanOrEqual(0);
    expect(typeof settings.allowRandomImposters).toBe('boolean');
    expect(settings.randomImposterChance).toBeGreaterThan(0);
  });
});

describe('loadDefaultCategories', () => {
  let mockCategories: Category[];

  beforeAll(() => {
    // Mock categories data for testing
    mockCategories = [
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
        words: [
          { word: 'test3', hint: 'hint3' },
          { word: 'test4', hint: 'hint4' },
        ],
      },
    ];

    // Mock fetch globally
    global.fetch = vi.fn();
  });

  it('should load categories from JSON successfully', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCategories,
    });

    const categories = await loadDefaultCategories();
    expect(categories).toEqual(mockCategories);
    expect(categories.length).toBeGreaterThan(0);
  });

  it('should handle fetch failure gracefully', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
    });

    const categories = await loadDefaultCategories();
    expect(categories).toEqual([
      {
        name: 'Fallback Category',
        active: true,
        words: [{ word: 'Test', hint: 'Fallback word' }],
      },
    ]);
  });

  it('should cache categories after first load', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCategories,
    });

    const categories1 = await loadDefaultCategories();
    const categories2 = await loadDefaultCategories();

    expect(categories1).toBe(categories2); // Should be same instance due to caching
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('should return valid category structure', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCategories,
    });

    const categories = await loadDefaultCategories();

    categories.forEach((category: Category) => {
      expect(category).toHaveProperty('name');
      expect(category).toHaveProperty('active');
      expect(category).toHaveProperty('words');

      expect(typeof category.name).toBe('string');
      expect(category.name.length).toBeGreaterThan(0);
      expect(typeof category.active).toBe('boolean');
      expect(Array.isArray(category.words)).toBe(true);
      expect(category.words.length).toBeGreaterThan(0);
    });
  });

  it('should have valid word structure in categories', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCategories,
    });

    const categories = await loadDefaultCategories();

    categories.forEach((category: Category) => {
      category.words.forEach((word: Word) => {
        expect(word).toHaveProperty('word');
        expect(word).toHaveProperty('hint');

        expect(typeof word.word).toBe('string');
        expect(word.word.length).toBeGreaterThan(0);
        expect(typeof word.hint).toBe('string');
        expect(word.hint.length).toBeGreaterThan(0);
      });
    });
  });
});

describe('Type Interfaces', () => {
  it('should create valid Player object', () => {
    const player: Player = {
      name: 'Test Player',
      icon: '😀',
      wins: 5,
      losses: 3,
      gamesPlayed: 8,
    };

    expect(player.name).toBe('Test Player');
    expect(player.wins).toBe(5);
    expect(player.losses).toBe(3);
    expect(player.gamesPlayed).toBe(8);
  });

  it('should create valid Word object', () => {
    const word: Word = {
      word: 'Test Word',
      hint: 'Test Hint',
    };

    expect(word.word).toBe('Test Word');
    expect(word.hint).toBe('Test Hint');
  });
});
