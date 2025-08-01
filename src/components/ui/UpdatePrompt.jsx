import { useRegisterSW } from 'virtual:pwa-register/react';

export function UpdatePrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW registered:', r);
    },
    onRegisterError(error) {
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
