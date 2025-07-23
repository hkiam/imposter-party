import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

export default function GamePlayScreen({ players, roundTimeMinutes, onEndGame }) {
  const [timeLeft, setTimeLeft] = useState(roundTimeMinutes * 60);
  const [paused, setPaused] = useState(false);
  const [showEndPrompt, setShowEndPrompt] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  useEffect(() => {
    if (paused || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [paused, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      setShowEndPrompt(true);
      setTimeExpired(true);
    }
  }, [timeLeft]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const handleEndClick = () => {
    if (timeLeft > 0) {
      onEndGame();
    } else {
      setShowEndPrompt(true);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Spiel läuft</h1>
      <div className="text-5xl font-mono mb-6">⏱ {formatTime(timeLeft)}</div>

      <div className="flex justify-center gap-4 mb-6">
        <Button onClick={() => setPaused((p) => !p)}>
          {paused ? "Fortsetzen" : "Pause"}
        </Button>
        <Button variant="destructive" onClick={handleEndClick}>
          Impostor wählen
        </Button>
      </div>

      {showEndPrompt && timeExpired && (
        <div className="bg-yellow-100 border border-yellow-300 p-4 rounded shadow text-left">
          <h2 className="text-lg font-semibold mb-2">⏳ Zeit abgelaufen</h2>
          <p className="mb-4">Die Runde ist beendet. Bitte legt jetzt fest, wer der Impostor ist.</p>
          <Button className="w-full" onClick={onEndGame}>Weiter zur Auswertung</Button>
        </div>
      )}
    </div>
  );
}