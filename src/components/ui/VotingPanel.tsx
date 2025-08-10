import * as React from 'react';
import { useState } from 'react';
import { Button } from './button';
import { Player } from '../../config/defaultSettings';

interface VotingPanelProps {
  players: Player[];
  onFinishVoting: (selectedPlayers: string[]) => void;
}

export default function VotingPanel({
  players,
  onFinishVoting,
}: VotingPanelProps): React.ReactElement {
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);

  const toggleSelection = (playerName: string): void => {
    setSelectedPlayers((prev) =>
      prev.includes(playerName)
        ? prev.filter((p) => p !== playerName)
        : [...prev, playerName]
    );
  };

  const handleVote = () => {
    onFinishVoting(selectedPlayers);
  };

  return (
    <div className="mt-6 p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-4">Wer ist der Imposter?</h2>
      <ul className="space-y-2 mb-4">
        {players.map((player: Player) => {
          const isSelected = selectedPlayers.includes(player.name);
          return (
            <li key={player.name}>
              <button
                onClick={() => toggleSelection(player.name)}
                className={`
                  w-full flex items-center justify-between px-4 py-2 rounded border
                  ${isSelected ? 'bg-blue-100 border-blue-500 text-blue-900 font-semibold' : 'bg-white border-gray-300'}
                `}
              >
                <span>
                  {player.icon ? `${player.icon} ${player.name}` : player.name}
                </span>
                {isSelected && <span>✅</span>}
              </button>
            </li>
          );
        })}
      </ul>

      <Button onClick={handleVote}>Abstimmen</Button>
    </div>
  );
}
