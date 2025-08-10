import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VotingPanel from '../components/ui/VotingPanel';
import { useGameStateStore, useGamePersistStore } from '../state/useGameStore';

export default function VotingScreen() {
  const navigate = useNavigate();
  const { players } = useGamePersistStore();
  const { gameState, setGameState } = useGameStateStore();

  const handleFinishVoting = (imposterNames) => {
    setGameState({ ...gameState, selectedPlayers: imposterNames });
    navigate('/end');
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">🗳 Abstimmungsrunde</h1>
      <p className="mb-4">Wer ist eurer Meinung nach der Imposter?</p>

      <VotingPanel players={players} onFinishVoting={handleFinishVoting} />
    </div>
  );
}
