import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VotingPanel from '../VotingPanel';
import { type Player } from '../../../config/defaultSettings';

const mockPlayers: Player[] = [
  { name: 'Player 1', icon: '😀', wins: 0, losses: 0, gamesPlayed: 0 },
  { name: 'Player 2', icon: '😎', wins: 0, losses: 0, gamesPlayed: 0 },
  { name: 'Player 3', wins: 0, losses: 0, gamesPlayed: 0 }, // No icon
];

describe('VotingPanel Component', () => {
  const mockOnFinishVoting = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render voting panel with title', () => {
    render(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );
    expect(screen.getByText('Wer ist der Imposter?')).toBeInTheDocument();
  });

  it('should render all players as selectable buttons', () => {
    render(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );

    expect(screen.getByText('😀 Player 1')).toBeInTheDocument();
    expect(screen.getByText('😎 Player 2')).toBeInTheDocument();
    expect(screen.getByText('Player 3')).toBeInTheDocument(); // No icon
  });

  it('should render vote button', () => {
    render(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );
    expect(
      screen.getByRole('button', { name: 'Abstimmen' })
    ).toBeInTheDocument();
  });

  it('should allow selecting a player', async () => {
    const user = userEvent.setup();
    render(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );

    const playerButton = screen.getByText('😀 Player 1');
    await user.click(playerButton);

    // Check if player is selected (should show checkmark)
    expect(screen.getByText('✅')).toBeInTheDocument();

    // Check if button has selected styling
    const button = playerButton.closest('button');
    expect(button).toHaveClass(
      'bg-blue-100',
      'border-blue-500',
      'text-blue-900',
      'font-semibold'
    );
  });

  it('should allow selecting multiple players', async () => {
    const user = userEvent.setup();
    render(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );

    await user.click(screen.getByText('😀 Player 1'));
    await user.click(screen.getByText('😎 Player 2'));

    // Should show two checkmarks
    const checkmarks = screen.getAllByText('✅');
    expect(checkmarks).toHaveLength(2);
  });

  it('should allow deselecting a player', async () => {
    const user = userEvent.setup();
    render(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );

    const playerButton = screen.getByText('😀 Player 1');

    // Select player
    await user.click(playerButton);
    expect(screen.getByText('✅')).toBeInTheDocument();

    // Deselect player
    await user.click(playerButton);
    expect(screen.queryByText('✅')).not.toBeInTheDocument();
  });

  it('should call onFinishVoting with selected players when vote button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );

    // Select two players
    await user.click(screen.getByText('😀 Player 1'));
    await user.click(screen.getByText('Player 3'));

    // Click vote button
    await user.click(screen.getByRole('button', { name: 'Abstimmen' }));

    expect(mockOnFinishVoting).toHaveBeenCalledWith(['Player 1', 'Player 3']);
  });

  it('should call onFinishVoting with empty array when no players selected', async () => {
    const user = userEvent.setup();
    render(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );

    // Click vote button without selecting anyone
    await user.click(screen.getByRole('button', { name: 'Abstimmen' }));

    expect(mockOnFinishVoting).toHaveBeenCalledWith([]);
  });

  it('should handle empty players array', () => {
    render(<VotingPanel players={[]} onFinishVoting={mockOnFinishVoting} />);

    expect(screen.getByText('Wer ist der Imposter?')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Abstimmen' })
    ).toBeInTheDocument();

    // Should not show any player buttons
    expect(screen.queryByText('✅')).not.toBeInTheDocument();
  });

  it('should apply correct styling to unselected players', () => {
    render(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );

    const playerButton = screen.getByText('😀 Player 1').closest('button');
    expect(playerButton).toHaveClass('bg-white', 'border-gray-300');
    expect(playerButton).not.toHaveClass('bg-blue-100', 'border-blue-500');
  });

  it('should handle player names without icons correctly', () => {
    const playersWithoutIcons: Player[] = [
      { name: 'Player A', wins: 0, losses: 0, gamesPlayed: 0 },
      { name: 'Player B', wins: 0, losses: 0, gamesPlayed: 0 },
    ];

    render(
      <VotingPanel
        players={playersWithoutIcons}
        onFinishVoting={mockOnFinishVoting}
      />
    );

    expect(screen.getByText('Player A')).toBeInTheDocument();
    expect(screen.getByText('Player B')).toBeInTheDocument();
  });

  it('should handle keyboard interaction on player buttons', () => {
    render(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );

    const playerButton = screen.getByText('😀 Player 1').closest('button');

    // Focus and press Enter
    playerButton?.focus();
    fireEvent.keyDown(playerButton!, { key: 'Enter', code: 'Enter' });

    // Should be able to interact via keyboard
    expect(playerButton).toBe(document.activeElement);
  });

  it('should maintain selection state across re-renders', async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );

    // Select a player
    await user.click(screen.getByText('😀 Player 1'));
    expect(screen.getByText('✅')).toBeInTheDocument();

    // Re-render with same props
    rerender(
      <VotingPanel players={mockPlayers} onFinishVoting={mockOnFinishVoting} />
    );

    // Selection should be maintained
    expect(screen.getByText('✅')).toBeInTheDocument();
  });
});
