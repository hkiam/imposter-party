import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function GameSetupScreen({
  onStartGame,
  highscore,
  onResetHighscore,
  categories,
  onManageCategories
}) {
  const [players, setPlayers] = useState(() => {
    const saved = localStorage.getItem("imposter_players");
    return saved ? JSON.parse(saved) : [];
  });
  const [newPlayer, setNewPlayer] = useState("");
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("imposter_settings");
    return saved
      ? JSON.parse(saved)
      : {
          numImposters: 1,
          showHints: true,
          roundTimeMinutes: 2,
        };
  });

  useEffect(() => {
    localStorage.setItem("imposter_players", JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem("imposter_settings", JSON.stringify(settings));
  }, [settings]);

  const addPlayer = () => {
    if (newPlayer.trim() && !players.find((p) => p.name === newPlayer.trim())) {
      setPlayers([...players, { name: newPlayer.trim(), icon: "😀" }]);
      setNewPlayer("");
    }
  };

  const removePlayer = (name) => {
    setPlayers(players.filter((p) => p.name !== name));
  };

  const handleStart = () => {
    if (players.length < 3) {
      alert("Mindestens 3 Spieler erforderlich");
      return;
    }

    const shuffled = [...players].sort(() => 0.5 - Math.random());
    const imposters = shuffled.slice(0, settings.numImposters).map((p) => p.name);

    const activeWords = categories.filter((c) => c.active).flatMap((c) => c.words);
    if (activeWords.length === 0) {
      alert("Keine Wörter in aktiven Kategorien!");
      return;
    }

    const chosen = activeWords[Math.floor(Math.random() * activeWords.length)];
    const startPlayer = shuffled[Math.floor(Math.random() * shuffled.length)].name;

    const gameState = {
      imposters,
      word: chosen.word,
      hint: chosen.hint,
      startPlayer,
      round: 1,
    };

    onStartGame(players, categories, settings, gameState);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Spiel vorbereiten</h1>

      <Card className="mb-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Spieler hinzufügen</h2>
          <div className="flex gap-2 mb-2">
            <Input value={newPlayer} onChange={(e) => setNewPlayer(e.target.value)} placeholder="Spielername" />
            <Button onClick={addPlayer}>Hinzufügen</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {players.map((p, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-100 p-2 rounded">
                <span>{p.icon}</span>
                <span>{p.name}</span>
                <Button variant="ghost" size="sm" onClick={() => removePlayer(p.name)}>
                  ✖️
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Einstellungen</h2>
          <div className="space-y-2">
            <div>
              <label>Anzahl Imposter:</label>
              <Input
                type="number"
                min={1}
                max={players.length || 1}
                value={settings.numImposters}
                onChange={(e) => setSettings({ ...settings, numImposters: parseInt(e.target.value) })}
              />
            </div>
            <div>
              <label>Hinweis anzeigen:</label>
              <input
                type="checkbox"
                checked={settings.showHints}
                onChange={(e) => setSettings({ ...settings, showHints: e.target.checked })}
              />
            </div>
            <div>
              <label>Rundenzeit (Minuten):</label>
              <Input
                type="number"
                min={1}
                value={settings.roundTimeMinutes}
                onChange={(e) => setSettings({ ...settings, roundTimeMinutes: parseInt(e.target.value) })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Kategorien</h2>
            <Button variant="outline" size="sm" onClick={onManageCategories}>
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
                    localStorage.setItem("imposter_categories", JSON.stringify(updated));
                    window.location.reload(); // optional: oder per Prop updaten
                  }}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Button onClick={handleStart} className="w-full mb-6">
        Spiel starten
      </Button>

      {highscore && Object.keys(highscore).length > 0 && (
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">🏆 Highscore</h2>
            <ul className="space-y-1 mb-2">
              {Object.entries(highscore).map(([name, score]) => (
                <li key={name} className="flex justify-between bg-white rounded px-3 py-1 shadow text-sm">
                  <span>{name}</span>
                  <span>
                    🟢 {score.wins} / 🔴 {score.losses}
                  </span>
                </li>
              ))}
            </ul>
            <Button onClick={onResetHighscore} className="bg-red-500 hover:bg-red-600">
              Highscore zurücksetzen
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
