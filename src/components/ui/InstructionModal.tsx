import * as React from 'react';
import { Button } from './button';

interface InstructionModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function InstructionModal({
  visible,
  onClose,
}: InstructionModalProps): React.ReactElement | null {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md shadow-xl text-gray-800">
        <h2 className="text-xl font-bold mb-2">🎉 Willkommen bei Imposter!</h2>
        <p className="text-sm mb-4">
          Alle Spieler bekommen ein Wort angezeigt – nur einer bekommt ein
          Anderes: der „Imposter“. Diskutiert, wer verdächtig wirkt, dann stimmt
          ab. Ziel: Enttarnt den Imposter – oder überlebt unentdeckt!
        </p>
        <Button onClick={onClose} className="w-full mt-2">
          Verstanden!
        </Button>
      </div>
    </div>
  );
}
