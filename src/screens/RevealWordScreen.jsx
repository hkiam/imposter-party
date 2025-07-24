import React, { useState, useRef } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function RevealWordScreen({ players, imposters, word, hint, showHints, onNext, onAbort }) {
  const [index, setIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [hasSeenContent, setHasSeenContent] = useState(false);
  const [confirmAbort, setConfirmAbort] = useState(false);

  const timerRef = useRef(null);

  const current = players[index];
  const isImposter = imposters.includes(current.name);

  const handleShowContent = () => {
    setShowContent(true);
    if (!hasSeenContent) {
      timerRef.current = setTimeout(() => {
        setHasSeenContent(true);
      }, 1000);
    }
  };

  const handleHideContent = () => {
    setShowContent(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleNext = () => {
    if (index < players.length - 1) {
      setIndex(index + 1);
      setShowContent(false);
      setHasSeenContent(false);
      setConfirmAbort(false);
    } else {
      onNext();
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center select-none">
      <Card>
        <CardContent>
          <h2 className="text-lg font-medium mb-2">
            Spieler {index + 1} von {players.length}
          </h2>

          <div className="mb-4">
            <p className="text-2xl font-bold mb-4">
              <strong>{current.name}</strong>
            </p>

            <button
              onMouseDown={handleShowContent}
              onMouseUp={handleHideContent}
              onTouchStart={handleShowContent}
              onTouchEnd={handleHideContent}
              className="w-40 h-40 rounded-full bg-gray-300 hover:opacity-90 text-6xl flex items-center justify-center mx-auto shadow-lg mb-2"
            >
              {current.icon}
            </button>

            <p
              className={`mt-2 text-xl font-semibold ${showContent && isImposter ? "text-red-600" : ""
                }`}
            >
              {showContent
                ? isImposter
                  ? showHints
                    ? `Hinweis (Imposter!): ${hint}`
                    : "Du bist der Imposter!"
                  : `Wort: ${word}`
                : "Halte das Bild gedrückt, um deinen Hinweis zu sehen"}
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center mt-6">
            <Button
              className={`h-12 ${hasSeenContent
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed opacity-60"
                }`}
              onClick={handleNext}
              disabled={!hasSeenContent}
            >
              {index < players.length - 1 ? "Nächster Spieler" : "Spiel starten"}
            </Button>

            {confirmAbort ? (
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-700 font-bold">Möchtest du das Spiel wirklich abbrechen?</p>
                <div className="flex gap-2 justify-center">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-2 rounded-lg shadow" 
                  onClick={onAbort}>
                    Ja
                  </Button>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-2 rounded-lg shadow"
                   onClick={() => setConfirmAbort(false)}>
                    Nein
                  </Button>
                </div>
              </div>
            ) : (
              <Button className="h-12 bg-red-500 hover:bg-red-600" onClick={() => setConfirmAbort(true)}>
                Spiel abbrechen
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
