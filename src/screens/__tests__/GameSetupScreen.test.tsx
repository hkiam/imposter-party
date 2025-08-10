import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameSetupScreen from '../GameSetupScreen';
import {
  renderWithRouter,
  mockNavigate,
  mockGameData,
} from '../../test/testUtils';
import {
  useGameStateStore,
  useGamePersistStore,
} from '../../state/useGameStore';

// Mock the stores
vi.mock('../../state/useGameStore');

const mockUseGamePersistStore = {
  players: [],
  settings: mockGameData.settings,
  highscore: {},
  categories: mockGameData.categories,
  addPlayer: vi.fn(),
  removePlayerByName: vi.fn(),
  setSettings: vi.fn(),
  resetHighscore: vi.fn(),
};

const mockUseGameStateStore = {
  setGameState: vi.fn(),
};

describe('GameSetupScreen Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockNavigate.mockClear();

    (useGamePersistStore as any).mockReturnValue(mockUseGamePersistStore);
    (useGameStateStore as any).mockReturnValue(mockUseGameStateStore);
  });

  it('should render setup screen with title and version', () => {
    renderWithRouter(<GameSetupScreen />);

    expect(screen.getByText('Imposter')).toBeInTheDocument();
    expect(screen.getByText(/v1\.0\.0/)).toBeInTheDocument();
  });

  it('should allow adding a new player', async () => {
    const user = userEvent.setup();
    renderWithRouter(<GameSetupScreen />);

    // Find input and button
    const playerInput = screen.getByPlaceholderText('Spielername eingeben');
    const addButton = screen.getByText('Hinzufügen');

    // Add a player
    await user.type(playerInput, 'Test Player');
    await user.click(addButton);

    expect(mockUseGamePersistStore.addPlayer).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Test Player',
        wins: 0,
        losses: 0,
        gamesPlayed: 0,
      })
    );
  });

  it('should not add empty player names', async () => {
    const user = userEvent.setup();
    renderWithRouter(<GameSetupScreen />);

    const addButton = screen.getByText('Hinzufügen');
    await user.click(addButton);

    expect(mockUseGamePersistStore.addPlayer).not.toHaveBeenCalled();
  });

  it('should not add duplicate player names', async () => {
    const user = userEvent.setup();
    const storeWithPlayers = {
      ...mockUseGamePersistStore,
      players: [
        {
          name: 'Existing Player',
          icon: '😀',
          wins: 0,
          losses: 0,
          gamesPlayed: 0,
        },
      ],
    };
    (useGamePersistStore as any).mockReturnValue(storeWithPlayers);

    renderWithRouter(<GameSetupScreen />);

    const playerInput = screen.getByPlaceholderText('Spielername eingeben');
    const addButton = screen.getByText('Hinzufügen');

    await user.type(playerInput, 'Existing Player');
    await user.click(addButton);

    expect(mockUseGamePersistStore.addPlayer).not.toHaveBeenCalled();
  });

  it('should display existing players', () => {
    const storeWithPlayers = {
      ...mockUseGamePersistStore,
      players: mockGameData.players,
    };
    (useGamePersistStore as any).mockReturnValue(storeWithPlayers);

    renderWithRouter(<GameSetupScreen />);

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('should allow removing players', async () => {
    const user = userEvent.setup();
    const storeWithPlayers = {
      ...mockUseGamePersistStore,
      players: [mockGameData.players[0]], // Just Alice
    };
    (useGamePersistStore as any).mockReturnValue(storeWithPlayers);

    renderWithRouter(<GameSetupScreen />);

    // Find and click remove button for Alice
    const removeButton = screen.getByTitle('Alice entfernen');
    await user.click(removeButton);

    expect(mockUseGamePersistStore.removePlayerByName).toHaveBeenCalledWith(
      'Alice'
    );
  });

  it('should show categories manager link', () => {
    renderWithRouter(<GameSetupScreen />);
    expect(screen.getByText('Kategorien verwalten')).toBeInTheDocument();
  });

  it('should navigate to categories when link is clicked', async () => {
    const user = userEvent.setup();
    renderWithRouter(<GameSetupScreen />);

    const categoriesLink = screen.getByText('Kategorien verwalten');
    await user.click(categoriesLink);

    expect(mockNavigate).toHaveBeenCalledWith('/categories');
  });

  it('should show player statistics when players exist', () => {
    const storeWithPlayersAndScores = {
      ...mockUseGamePersistStore,
      players: mockGameData.players,
      highscore: mockGameData.highscore,
    };
    (useGamePersistStore as any).mockReturnValue(storeWithPlayersAndScores);

    renderWithRouter(<GameSetupScreen />);

    // Should show stats section
    expect(screen.getByText('Statistiken')).toBeInTheDocument();
  });

  it('should allow resetting highscores', async () => {
    const user = userEvent.setup();
    const storeWithScores = {
      ...mockUseGamePersistStore,
      players: mockGameData.players,
      highscore: mockGameData.highscore,
    };
    (useGamePersistStore as any).mockReturnValue(storeWithScores);

    renderWithRouter(<GameSetupScreen />);

    const resetButton = screen.getByText('Highscore zurücksetzen');
    await user.click(resetButton);

    expect(mockUseGamePersistStore.resetHighscore).toHaveBeenCalled();
  });

  it('should start game when sufficient players and categories', async () => {
    const user = userEvent.setup();
    const readyStore = {
      ...mockUseGamePersistStore,
      players: mockGameData.players, // 3 players
      categories: mockGameData.categories,
    };
    (useGamePersistStore as any).mockReturnValue(readyStore);

    renderWithRouter(<GameSetupScreen />);

    const startButton = screen.getByText('Spiel starten');
    expect(startButton).not.toBeDisabled();

    await user.click(startButton);

    expect(mockUseGameStateStore.setGameState).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/reveal');
  });

  it('should disable start game button when insufficient players', () => {
    const storeWithFewPlayers = {
      ...mockUseGamePersistStore,
      players: [mockGameData.players[0]], // Only 1 player
      categories: mockGameData.categories,
    };
    (useGamePersistStore as any).mockReturnValue(storeWithFewPlayers);

    renderWithRouter(<GameSetupScreen />);

    const startButton = screen.getByText('Spiel starten');
    expect(startButton).toBeDisabled();
  });

  it('should disable start game button when no active categories', () => {
    const storeWithInactiveCategories = {
      ...mockUseGamePersistStore,
      players: mockGameData.players,
      categories: [
        {
          name: 'Inactive Category',
          active: false,
          words: [{ word: 'test', hint: 'hint' }],
        },
      ],
    };
    (useGamePersistStore as any).mockReturnValue(storeWithInactiveCategories);

    renderWithRouter(<GameSetupScreen />);

    const startButton = screen.getByText('Spiel starten');
    expect(startButton).toBeDisabled();
  });

  it('should show instruction modal when showInstructions is true', () => {
    const storeWithInstructions = {
      ...mockUseGamePersistStore,
      settings: { ...mockGameData.settings, showInstructions: true },
    };
    (useGamePersistStore as any).mockReturnValue(storeWithInstructions);

    renderWithRouter(<GameSetupScreen />);

    expect(screen.getByText('🎉 Willkommen bei Imposter!')).toBeInTheDocument();
  });

  it('should close instruction modal and update settings', async () => {
    const user = userEvent.setup();
    const storeWithInstructions = {
      ...mockUseGamePersistStore,
      settings: { ...mockGameData.settings, showInstructions: true },
    };
    (useGamePersistStore as any).mockReturnValue(storeWithInstructions);

    renderWithRouter(<GameSetupScreen />);

    const closeButton = screen.getByText('Verstanden!');
    await user.click(closeButton);

    expect(mockUseGamePersistStore.setSettings).toHaveBeenCalledWith(
      expect.objectContaining({
        showInstructions: false,
      })
    );
  });

  it('should handle icon selection for players', async () => {
    const user = userEvent.setup();
    renderWithRouter(<GameSetupScreen />);

    // Should show icon picker
    const iconButtons = screen.getAllByRole('button');
    const emojiButton = iconButtons.find(
      (button) => button.textContent === '😎'
    );

    if (emojiButton) {
      await user.click(emojiButton);
    }

    // Add player with selected icon
    const playerInput = screen.getByPlaceholderText('Spielername eingeben');
    const addButton = screen.getByText('Hinzufügen');

    await user.type(playerInput, 'Cool Player');
    await user.click(addButton);

    expect(mockUseGamePersistStore.addPlayer).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Cool Player',
        icon: expect.any(String),
      })
    );
  });
});
