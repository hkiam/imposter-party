// src/App.jsx
import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import GameSetupScreen from './screens/GameSetupScreen';
import RevealWordScreen from './screens/RevealWordScreen';
import GamePlayScreen from './screens/GamePlayScreen';
import GameEndScreen from './screens/GameEndScreen';
import CategoryManagerScreen from './screens/CategoryManagerScreen';
import VotingScreen from './screens/VotingScreen';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Navigate to="/setup" replace />} />
          <Route path="/setup" element={<GameSetupScreen />} />
          <Route path="/categories" element={<CategoryManagerScreen />} />
          <Route path="/reveal" element={<RevealWordScreen />} />
          <Route path="/play" element={<GamePlayScreen />} />
          <Route path="/end" element={<GameEndScreen />} />
          <Route path="/vote" element={<VotingScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
