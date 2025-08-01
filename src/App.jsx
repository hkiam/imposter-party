import React, { useEffect } from 'react';
import GameSetupScreen from './screens/GameSetupScreen';
import RevealWordScreen from './screens/RevealWordScreen';
import GamePlayScreen from './screens/GamePlayScreen';
import GameEndScreen from './screens/GameEndScreen';
import CategoryManagerScreen from './screens/CategoryManagerScreen';
import { useGameStateStore } from './state/useGameStore';

export default function App() {
  const { phase, gameState } = useGameStateStore();

  return (
    <div className="min-h-screen bg-gray-100">
      {phase === 'setup' && <GameSetupScreen />}
      {phase === 'categories' && <CategoryManagerScreen />}
      {phase === 'reveal' && gameState && <RevealWordScreen />}
      {phase === 'play' && gameState && <GamePlayScreen />}
      {phase === 'end' && gameState && <GameEndScreen />}
    </div>
  );
}
