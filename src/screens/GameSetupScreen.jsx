import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import PlayerStats from '../components/ui/PlayerStats';
import { UpdatePrompt } from '../components/ui/UpdatePrompt';
import { useGameStateStore, useGamePersistStore } from '../state/useGameStore';
import InstructionModal from '../components/ui/InstructionModal';

export default function GameSetupScreen() {
  const {
    players,
    settings,
    highscore,
    resetHighscore,
    categories,
    addPlayer,
    removePlayerByName,
    setSettings,
  } = useGamePersistStore();

  const { setGameState } = useGameStateStore();

  const navigate = useNavigate();

  const [newPlayer, setNewPlayer] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [showHighscore, setShowHighscore] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('😀');
  const [showAddPlayer, setShowAddPlayer] = useState(false);

  const emojiOptions = [
    '😀',
    '😎',
    '👽',
    '🐱',
    '🐶',
    '🦊',
    '🐸',
    '🧙‍♂️',
    '🧛‍♀️',
    '🧟',
    '🤖',
    '👻',
    '🤡',
    '🥸',
    '🤓',
    '🦄',
    '🐵',
    '🐙',
    '🧞‍♂️',
    '🧚‍♀️',
    '🦸‍♀️',
    '👾',
    '🎮',
    '🕵️‍♂️',
    '🍕',
    '🍩',
  ];

  const onAddPlayer = () => {
    const trimmed = newPlayer.trim();
    if (trimmed && !players.find((p) => p.name === trimmed)) {
      addPlayer({ name: trimmed, icon: selectedIcon });
      setNewPlayer('');
      setSelectedIcon('😀'); // optional: zurücksetzen
    }
  };

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const handleStart = () => {
    if (players.length < 3) {
      alert('Mindestens 3 Spieler erforderlich');
      return;
    }

    // Imposter auswählen
    const shuffled = shuffleArray(players);
    let imposterCount = settings.numImposters;
    if (settings.allowRandomImposters) {
      const roll = Math.random() * 100;
      if (roll < settings.randomImposterChance) {
        // Wähle zufällige Anzahl Imposter zwischen 0 und players.length - 1
        imposterCount = Math.floor(Math.random() * players.length);
      }
    }
    const imposters = shuffled.slice(0, imposterCount).map((p) => p.name);

    // Wort auswählen
    const activeWords = categories
      .filter((c) => c.active)
      .flatMap((c) => c.words);
    if (activeWords.length === 0) {
      alert('Keine Wörter in aktiven Kategorien!');
      return;
    }

    const chosen = activeWords[Math.floor(Math.random() * activeWords.length)];
    const startPlayer =
      shuffled[Math.floor(Math.random() * shuffled.length)].name;

    const gameState = {
      imposters,
      word: chosen.word,
      hint: chosen.hint,
      startPlayer,
      round: 1,
    };
    setGameState(gameState);
    navigate('/reveal');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <img src="pwa-192x192.png" alt="Imposter Icon" className="w-8 h-8" />
        <h1 className="text-2xl font-bold">Imposter</h1>
        <p>v{__APP_VERSION__}</p>
        <UpdatePrompt />
      </div>

      <InstructionModal
        visible={settings.showInstructions ?? true}
        onClose={(e) =>
          setSettings({
            ...settings,
            showInstructions: false,
          })
        }
      />

      {/* Spieler */}
      <Card className="mb-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">🧑‍🤝‍🧑 Spieler</h2>

          {/* Bereits hinzugefügte Spieler */}
          <div className="flex flex-wrap gap-2 mb-4">
            {players.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-100 p-2 rounded"
              >
                <span className="text-xl">{p.icon}</span>
                <span>{p.name}</span>
                <Button
                  size="icon"
                  className="w-6 h-6 p-0 text-red-600 hover:text-red-800"
                  variant="ghost"
                  onClick={() => removePlayerByName(p.name)}
                >
                  ✖️
                </Button>
              </div>
            ))}
          </div>

          {/* Neuer Spieler hinzufügen mit + */}
          <div>
            <Button
              onClick={() => setShowAddPlayer((prev) => !prev)}
              className="mb-2"
              variant="outline"
            >
              ➕ Neuer Spieler
            </Button>

            <AnimatePresence>
              {showAddPlayer && (
                <motion.div
                  key="add-player-form"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex gap-2 mb-2 mt-2">
                    <Input
                      value={newPlayer}
                      onChange={(e) => setNewPlayer(e.target.value)}
                      placeholder="Spielername"
                    />
                    <Button onClick={onAddPlayer}>Hinzufügen</Button>
                  </div>

                  <div className="mb-2">
                    <p className="text-sm text-gray-600 mb-1">
                      Icon auswählen:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {emojiOptions.map((emoji) => (
                        <button
                          key={emoji}
                          className={`text-2xl p-2 rounded border ${selectedIcon === emoji ? 'border-blue-500' : 'border-transparent'}`}
                          onClick={() => setSelectedIcon(emoji)}
                          type="button"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>

      {/* Spiel starten */}
      <Button
        onClick={handleStart}
        className="w-full mb-6 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 rounded-lg shadow-md transition duration-200"
      >
        Spiel starten
      </Button>

      {/* Einstellungen */}
      <Card className="mb-4">
        <CardContent>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowSettings(!showSettings)}
          >
            <h2 className="text-xl font-semibold">🛠️ Einstellungen</h2>
            <span>{showSettings ? '▲' : '▼'}</span>
          </div>
          <AnimatePresence initial={false}>
            {showSettings && (
              <motion.div
                key="settings"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 space-y-2"
              >
                <div>
                  <label>Anzahl Imposter:</label>
                  <Input
                    type="number"
                    min={1}
                    max={players.length || 1}
                    value={settings.numImposters}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        numImposters: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
                <div>
                  <label>Hinweis anzeigen:</label>
                  <input
                    type="checkbox"
                    checked={settings.showHints}
                    onChange={(e) =>
                      setSettings({ ...settings, showHints: e.target.checked })
                    }
                  />
                </div>
                <div>
                  <label>Rundenzeit (Minuten):</label>
                  <Input
                    type="number"
                    min={1}
                    value={settings.roundTimeMinutes}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        roundTimeMinutes: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
                <div>
                  <label>Abstimmzeit (Minuten):</label>
                  <Input
                    type="number"
                    min={0}
                    value={settings.votingTimeMinutes}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        votingTimeMinutes: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={settings.allowRandomImposters}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          allowRandomImposters: e.target.checked,
                        })
                      }
                      className="mr-2"
                    />
                    Zufällige Anzahl Imposter (0 bis n) erlauben
                  </label>
                </div>

                {settings.allowRandomImposters && (
                  <div>
                    <label>
                      Wahrscheinlichkeit (0–50%) für zufällige Imposter-Anzahl:
                    </label>
                    <Input
                      type="number"
                      min={0}
                      max={50}
                      value={settings.randomImposterChance}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          randomImposterChance: Math.min(
                            50,
                            Math.max(0, parseInt(e.target.value) || 0)
                          ),
                        })
                      }
                    />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Kategorien */}
      <Card className="mb-4">
        <CardContent>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowCategories(!showCategories)}
          >
            <h2 className="text-xl font-semibold">🗂️ Kategorien</h2>
            <span>{showCategories ? '▲' : '▼'}</span>
          </div>
          <AnimatePresence initial={false}>
            {showCategories && (
              <motion.div
                key="categories"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2"
              >
                <div className="flex justify-end mb-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/categories')}
                  >
                    Kategorien verwalten
                  </Button>
                </div>
                <ul className="space-y-1">
                  {categories.map((cat, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span>{cat.name}</span>
                      <input
                        type="checkbox"
                        checked={cat.active}
                        onChange={(e) => {
                          const updated = [...categories];
                          updated[i].active = e.target.checked;
                          localStorage.setItem(
                            'imposter_categories',
                            JSON.stringify(updated)
                          );
                          window.location.reload();
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Highscore */}
      {highscore && Object.keys(highscore).length > 0 && (
        <Card>
          <CardContent>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowHighscore(!showHighscore)}
            >
              <h2 className="text-xl font-semibold">🏆 Highscore</h2>
              <span>{showHighscore ? '▲' : '▼'}</span>
            </div>
            <AnimatePresence initial={false}>
              {showHighscore && (
                <motion.div
                  key="highscore"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2"
                >
                  <PlayerStats players={players} highscore={highscore} />
                  <Button
                    onClick={resetHighscore}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    Highscore zurücksetzen
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
