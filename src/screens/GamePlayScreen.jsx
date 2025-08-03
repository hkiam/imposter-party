import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import CountdownBar from '../components/ui/CountdownBar';
import { useGamePersistStore } from '../state/useGameStore';

export default function GamePlayScreen() {
  const { players, settings } = useGamePersistStore();
  const [timeLeft, setTimeLeft] = useState(settings.roundTimeMinutes * 60);
  const [votingTimeLeft, setVotingTimeLeft] = useState(
    settings.votingTimeMinutes * 60
  );
  const [paused, setPaused] = useState(false);
  const [showEndPrompt, setShowEndPrompt] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const [votingTimeExpired, setVotingTimeExpired] = useState(false);
  const [confirmEndEarly, setConfirmEndEarly] = useState(false);
  const [startingPlayer, setStartingPlayer] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Wähle beim Start einen zufälligen Spieler als Startspieler
    const random = players[Math.floor(Math.random() * players.length)];
    setStartingPlayer(random.name);
  }, [players]);

  useEffect(() => {
    if (paused || timeLeft <= 0) return;

    clearInterval(roundTimerRef.current); // alten Timer entfernen
    roundTimerRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(roundTimerRef.current);
  }, [paused, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      setShowEndPrompt(true);
      setTimeExpired(true);
    } else if (timeLeft === 3) {
      playEndSound();
    }
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft > 0 || votingTimeLeft <= 0) return;

    clearInterval(votingTimerRef.current);
    votingTimerRef.current = setInterval(() => {
      setVotingTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(votingTimerRef.current);
  }, [timeLeft, votingTimeLeft]);

  useEffect(() => {
    if (votingTimeLeft === 0) {
      setVotingTimeExpired(true);
    } else if (votingTimeLeft === 3) {
      playEndSound();
    }
  }, [votingTimeLeft]);

  // Wake Lock API für mobile Geräte aktivieren
  useEffect(() => {
    let wakeLock = null;

    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLock = await navigator.wakeLock.request('screen');
          console.log('✅ Wake Lock aktiviert');
        }
      } catch (err) {
        console.warn('⚠️ Wake Lock Fehler:', err);
      }
    };

    requestWakeLock();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (wakeLock) wakeLock.release();
    };
  }, []);

  const playEndSound = () => {
    try {
      const sound = endSoundRef.current;
      if (sound && sound.canPlayType('audio/mpeg')) {
        sound.play().catch((err) => {
          console.warn('Audio-Fehler (Autoplay blockiert?)', err);
        });
      } else {
        console.warn('Audioformat nicht unterstützt oder Sound fehlt.');
      }
    } catch (error) {
      console.error('Fehler beim Audio-Abspielen:', error);
    }
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const handleEndClick = () => {
    if (timeLeft > 0) {
      setConfirmEndEarly(true);
    } else {
      setShowEndPrompt(true);
    }
  };

  const confirmEndGame = () => {
    setConfirmEndEarly(false);
    navigate('/end');
  };

  const roundTimerRef = useRef(null);
  const votingTimerRef = useRef(null);
  const endSoundRef = useRef(null);

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Spiel läuft</h1>
      {startingPlayer && (
        <p className="text-md mb-2">
          🎲 <strong>{startingPlayer}</strong> beginnt die Runde
        </p>
      )}
      <div className="text-5xl font-mono mb-6">⏱ {formatTime(timeLeft)}</div>
      <CountdownBar current={timeLeft} total={settings.roundTimeMinutes * 60} />

      <div className="flex justify-center gap-4 mb-6">
        <Button onClick={() => setPaused((p) => !p)} disabled={timeLeft <= 3}>
          {paused ? 'Fortsetzen' : 'Pause'}
        </Button>
        <Button variant="destructive" onClick={handleEndClick}>
          Imposter wählen
        </Button>
      </div>

      <audio
        ref={endSoundRef}
        src={`${import.meta.env.BASE_URL}sounds/timer-end.mp3`}
        preload="auto"
      />

      {showEndPrompt && timeExpired && (
        <div className="bg-yellow-100 border border-yellow-300 p-4 rounded shadow text-left animate-pulse">
          <h2 className="text-lg font-semibold mb-2">⏳ Zeit abgelaufen</h2>
          <p className="mb-4">
            Die Runde ist beendet. Bitte legt jetzt fest, wer der Imposter ist.
          </p>

          {settings.votingTimeMinutes > 0 && (
            <div>
              <div className="text-5xl font-mono mb-6">
                ⏱ {formatTime(votingTimeLeft)}
              </div>
              <CountdownBar
                current={votingTimeLeft}
                total={settings.votingTimeMinutes * 60}
              />
            </div>
          )}

          <Button variant="destructive" onClick={() => navigate('/end')}>
            Weiter zur Auswertung
          </Button>
        </div>
      )}

      {confirmEndEarly && (
        <div className="bg-red-100 border border-red-300 p-4 rounded shadow text-left">
          <h2 className="text-lg font-semibold mb-2">
            ⚠️ Spiel wirklich beenden?
          </h2>
          <p className="mb-4">
            Willst du wirklich vorzeitig den Imposter wählen und das Spiel
            beenden?
          </p>
          <div className="flex gap-4">
            <Button variant="destructive" onClick={confirmEndGame}>
              Ja, beenden
            </Button>
            <Button
              variant="secondary"
              onClick={() => setConfirmEndEarly(false)}
            >
              Abbrechen
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
