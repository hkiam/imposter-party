import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function RevealWordScreen({ players, imposters, word, hint, showHints, onNext, onAbort }) {
  const [index, setIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const current = players[index];
  const isImposter = imposters.includes(current.name);

  const handleNext = () => {
    if (index < players.length - 1) {
      setIndex(index + 1);
      setShowContent(false);
    } else {
      onNext(); // Alle fertig ➜ zur nächsten Phase
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <Card>
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Spieler {index + 1} von {players.length}</h2>

          <div className="mb-4">
            <p className="text-lg font-medium mb-2">{current.icon} <strong>{current.name}</strong></p>

            <button
              onMouseDown={() => setShowContent(true)}
              onMouseUp={() => setShowContent(false)}
              onTouchStart={() => setShowContent(true)}
              onTouchEnd={() => setShowContent(false)}
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
            <Button className="h-12 bg-blue-500 hover:bg-blue-600" onClick={handleNext}>
              {index < players.length - 1 ? "Nächster Spieler" : "Spiel starten"}
            </Button>
            <Button className="h-12 bg-red-500 hover:bg-red-600" onClick={onAbort}>Spiel abbrechen</Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
