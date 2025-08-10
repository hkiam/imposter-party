import * as React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export function UpdatePrompt(): React.ReactElement | null {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration | undefined): void {
      console.log('SW registered:', r);
    },
    onRegisterError(error: any): void {
      console.error('SW registration error:', error);
    },
  });

  return needRefresh ? (
    <div className="fixed bottom-4 right-4 p-4 rounded shadow">
      <button
        className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
        onClick={() => updateServiceWorker(true)}
      >
        🔄 Neue Version verfügbar!
      </button>
    </div>
  ) : null;
}
