import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import PlayerStats from '../components/ui/PlayerStats';
import { useGameStateStore, useGamePersistStore } from '../state/useGameStore';

export default function GameEndScreen() {
  const { gameState } = useGameStateStore();
  const { players, highscore, setHighscore } = useGamePersistStore();

  const [step, setStep] = useState(0);
  const [allImpostersFound, setAllImpostersFound] = useState(null);
  const [wordGuessedByImposters, setWordGuessedByImposters] = useState(null);
  const [evaluationDone, setEvaluationDone] = useState(false);
  const [resultText, setResultText] = useState('');

  const navigate = useNavigate();

  // Automatische Bewertung: wurden alle Imposter erkannt?
  useEffect(() => {
    const imposters = new Set(gameState.imposters || []);
    const selected = new Set(gameState.selectedPlayers || []);
    const allFound = [...imposters].every((name) => selected.has(name));
    setAllImpostersFound(allFound);

    if (!allFound) {
      evaluateGame(false, false); // sofort werten
    } else {
      setStep(1); // weiter zur Wort-Abfrage
    }
  }, [gameState]);

  const handleAnswer = (value) => {
    if (step === 1) {
      setWordGuessedByImposters(value);
      evaluateGame(value, allImpostersFound);
    }
  };

  const evaluateGame = (wordGuessed, impostersFound) => {
    const updated = { ...highscore };
    const imposters = new Set(gameState.imposters);

    players.forEach((p) => {
      const isImposter = imposters.has(p.name);
      if (!updated[p.name]) updated[p.name] = { wins: 0, losses: 0 };

      if (!impostersFound) {
        if (isImposter) updated[p.name].wins++;
        else updated[p.name].losses++;
        return;
      }

      if (wordGuessed) {
        if (isImposter) updated[p.name].wins++;
        else updated[p.name].losses++;
      } else {
        if (isImposter) updated[p.name].losses++;
        else updated[p.name].wins++;
      }
    });

    setHighscore(updated);

    if (!impostersFound) {
      setResultText(
        'Die Imposter haben gewonnen, weil sie nicht alle entdeckt wurden.'
      );
    } else if (wordGuessed) {
      setResultText(
        'Die Imposter haben gewonnen, weil sie das geheime Wort erraten konnten.'
      );
    } else {
      setResultText(
        'Die ehrlichen Spieler haben gewonnen, weil die Imposter das Wort nicht erraten konnten.'
      );
    }

    setEvaluationDone(true);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Spielende</h1>
      <div className="mt-4 bg-red-100 border border-red-300 text-red-800 p-2 rounded">
        <strong>Imposter:</strong> {gameState?.imposters.join(', ')}
        <br />
        <strong>Wort:</strong> {gameState?.word}
      </div>
      <br />

      {!evaluationDone ? (
        <Card className="mb-4">
          <CardContent>
            {step === 1 && (
              <>
                <p className="mb-4 text-sm text-gray-700 font-bold text-center">
                  Konnten die Imposter das geheime Wort erraten?
                </p>
                <div className="flex gap-4">
                  <Button
                    onClick={() => handleAnswer(true)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-2 rounded-lg shadow"
                  >
                    Ja
                  </Button>
                  <Button
                    onClick={() => handleAnswer(false)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-2 rounded-lg shadow"
                  >
                    Nein
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">🏆 Spielausgang</h2>
            <p className="text-md text-gray-800 bg-yellow-100 p-3 rounded">
              {resultText || 'Keine Auswertung verfügbar.'}
            </p>
            <br />
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 rounded-lg shadow"
              onClick={() => navigate('/')}
            >
              Zurück zum Start
            </Button>
            <br />
            <div className="mt-4">
              <h3 className="text-md font-semibold mb-2">🏅 Highscore</h3>
              <PlayerStats players={players} highscore={highscore} />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
