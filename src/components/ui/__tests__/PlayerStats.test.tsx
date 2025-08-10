import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PlayerStats from '../PlayerStats';
import { type Player } from '../../../config/defaultSettings';

const mockPlayers: Player[] = [
  { name: 'Player 1', icon: '😀', wins: 3, losses: 1, gamesPlayed: 4 },
  { name: 'Player 2', icon: '😎', wins: 2, losses: 2, gamesPlayed: 4 },
  { name: 'Player 3', icon: '🤔', wins: 1, losses: 3, gamesPlayed: 4 },
];

const mockHighscore = {
  'Player 1': { wins: 3, losses: 1 },
  'Player 2': { wins: 2, losses: 2 },
  'Player 3': { wins: 1, losses: 3 },
};

describe('PlayerStats Component', () => {
  it('should render all players', () => {
    render(<PlayerStats players={mockPlayers} highscore={mockHighscore} />);

    expect(screen.getByText('Player 1')).toBeInTheDocument();
    expect(screen.getByText('Player 2')).toBeInTheDocument();
    expect(screen.getByText('Player 3')).toBeInTheDocument();
  });

  it('should display win/loss statistics correctly', () => {
    render(<PlayerStats players={mockPlayers} highscore={mockHighscore} />);

    // Check that stats are displayed (wins * 2 - losses = points)
    expect(screen.getByText(/3 Siege/)).toBeInTheDocument();
    expect(screen.getByText(/1 Niederlagen/)).toBeInTheDocument();
    expect(screen.getByText(/Punkte: 5/)).toBeInTheDocument(); // 3*2 - 1 = 5
  });

  it('should sort players by score (wins*2 - losses)', () => {
    render(<PlayerStats players={mockPlayers} highscore={mockHighscore} />);

    const playerElements = screen.getAllByRole('listitem');

    // Player 1 should be first (score: 3*2-1 = 5)
    expect(playerElements[0]).toHaveTextContent('Player 1');
    expect(playerElements[0]).toHaveTextContent('🥇');

    // Player 2 should be second (score: 2*2-2 = 2)
    expect(playerElements[1]).toHaveTextContent('Player 2');
    expect(playerElements[1]).toHaveTextContent('🥈');

    // Player 3 should be third (score: 1*2-3 = -1)
    expect(playerElements[2]).toHaveTextContent('Player 3');
    expect(playerElements[2]).toHaveTextContent('🥉');
  });

  it('should display medals for top 3 positions', () => {
    render(<PlayerStats players={mockPlayers} highscore={mockHighscore} />);

    expect(screen.getByText('🥇')).toBeInTheDocument(); // First place
    expect(screen.getByText('🥈')).toBeInTheDocument(); // Second place
    expect(screen.getByText('🥉')).toBeInTheDocument(); // Third place
  });

  it('should handle players not in highscore (defaulting to 0)', () => {
    const playersWithNewPlayer: Player[] = [
      ...mockPlayers,
      { name: 'New Player', icon: '🆕', wins: 0, losses: 0, gamesPlayed: 0 },
    ];

    render(
      <PlayerStats players={playersWithNewPlayer} highscore={mockHighscore} />
    );

    expect(screen.getByText('New Player')).toBeInTheDocument();
    expect(
      screen.getByText(/0 Siege.*0 Niederlagen.*Punkte: 0/)
    ).toBeInTheDocument();
  });

  it('should handle empty players array', () => {
    render(<PlayerStats players={[]} highscore={{}} />);

    const list = screen.getByRole('list');
    expect(list).toBeEmptyDOMElement();
  });

  it('should handle empty highscore object', () => {
    render(<PlayerStats players={mockPlayers} highscore={{}} />);

    // All players should show 0 wins, 0 losses, 0 points
    expect(
      screen.getAllByText(/0 Siege.*0 Niederlagen.*Punkte: 0/)
    ).toHaveLength(3);
  });

  it('should calculate points correctly for different scenarios', () => {
    const testHighscore = {
      'High Scorer': { wins: 5, losses: 0 },
      'Average Player': { wins: 2, losses: 2 },
      'Poor Performer': { wins: 0, losses: 5 },
    };

    const testPlayers: Player[] = [
      { name: 'High Scorer', wins: 5, losses: 0, gamesPlayed: 5 },
      { name: 'Average Player', wins: 2, losses: 2, gamesPlayed: 4 },
      { name: 'Poor Performer', wins: 0, losses: 5, gamesPlayed: 5 },
    ];

    render(<PlayerStats players={testPlayers} highscore={testHighscore} />);

    // High Scorer: 5*2 - 0 = 10 points
    expect(screen.getByText(/Punkte: 10/)).toBeInTheDocument();

    // Average Player: 2*2 - 2 = 2 points
    expect(screen.getByText(/Punkte: 2/)).toBeInTheDocument();

    // Poor Performer: 0*2 - 5 = -5 points
    expect(screen.getByText(/Punkte: -5/)).toBeInTheDocument();
  });

  it('should handle tied scores correctly', () => {
    const tiedHighscore = {
      'Player A': { wins: 2, losses: 0 },
      'Player B': { wins: 2, losses: 0 },
    };

    const tiedPlayers: Player[] = [
      { name: 'Player A', wins: 2, losses: 0, gamesPlayed: 2 },
      { name: 'Player B', wins: 2, losses: 0, gamesPlayed: 2 },
    ];

    render(<PlayerStats players={tiedPlayers} highscore={tiedHighscore} />);

    // Both should show same points
    const pointsTexts = screen.getAllByText(/Punkte: 4/);
    expect(pointsTexts).toHaveLength(2);
  });

  it('should apply correct CSS classes', () => {
    render(<PlayerStats players={mockPlayers} highscore={mockHighscore} />);

    const list = screen.getByRole('list');
    expect(list).toHaveClass('text-sm', 'space-y-1');

    const listItems = screen.getAllByRole('listitem');
    listItems.forEach((item) => {
      expect(item).toHaveClass(
        'flex',
        'justify-between',
        'bg-white',
        'rounded',
        'p-2',
        'shadow'
      );
    });
  });

  it('should handle players with partial highscore data', () => {
    const partialHighscore = {
      'Player 1': { wins: 3, losses: 1 },
      // Player 2 and 3 missing from highscore
    };

    render(<PlayerStats players={mockPlayers} highscore={partialHighscore} />);

    // Player 1 should show real stats
    expect(
      screen.getByText(/3 Siege.*1 Niederlagen.*Punkte: 5/)
    ).toBeInTheDocument();

    // Players 2 and 3 should show 0s
    expect(
      screen.getAllByText(/0 Siege.*0 Niederlagen.*Punkte: 0/)
    ).toHaveLength(2);
  });
});
