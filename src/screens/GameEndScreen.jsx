import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import PlayerStats from "../components/ui/PlayerStats";


export default function GameEndScreen({ evaluationDone, evaluateGame, resultText, onRestart, imposters, players, highscore, word }) {
    const [step, setStep] = useState(0);
    const [allImpostersFound, setAllImpostersFound] = useState(null);
    const [wordGuessedByImposters, setWordGuessedByImposters] = useState(null);

    const sortedPlayers = [...players].sort((a, b) => {
        const aScore = (highscore[a.name]?.wins ?? 0) * 2 - (highscore[a.name]?.losses ?? 0);
        const bScore = (highscore[b.name]?.wins ?? 0) * 2 - (highscore[b.name]?.losses ?? 0);
        return bScore - aScore;
    });

    const handleAnswer = (value) => {
        if (step === 0) {
            setAllImpostersFound(value);
            if (!value) {
                evaluateGame(false, false); // Imposter nicht erkannt → direkt auswerten
            } else {
                setStep(1);
            }
        } else if (step === 1) {
            setWordGuessedByImposters(value);
            evaluateGame(value, allImpostersFound);
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Spielende</h1>

            {!evaluationDone ? (
                <Card className="mb-4">
                    <CardContent>
                        <div className="mt-4 bg-red-100 border border-red-300 text-red-800 p-2 rounded">
                            <strong>Imposter:</strong> {imposters.join(", ")}
                            <br />
                            <strong>Wort:</strong> {word}
                        </div>
                        <br />
                        {step === 0 && (
                            <>
                                <p className="mb-4 text-sm text-gray-700 font-bold text-center">
                                    Wurden alle Imposter erkannt?
                                </p>
                                <div className="flex gap-4">
                                    <Button
                                        onClick={() => handleAnswer(true)}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-2 rounded-lg shadow"
                                    >
                                        ✅ Ja
                                    </Button>
                                    <Button
                                        onClick={() => handleAnswer(false)}
                                        className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-2 rounded-lg shadow"
                                    >
                                        ❌ Nein
                                    </Button>
                                </div>
                            </>
                        )}

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
                            {resultText || "Keine Auswertung verfügbar."}
                        </p>
                        <br/>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 rounded-lg shadow" onClick={onRestart}>
                            Zurück zum Start
                        </Button>
                        <br/>
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
