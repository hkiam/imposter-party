import * as React from 'react';

interface CountdownBarProps {
  current: number;
  total: number;
}

export default function CountdownBar({
  current,
  total,
}: CountdownBarProps): React.ReactElement {
  const percentage = Math.max((current / total) * 100, 0);
  const danger = percentage < 20;

  return (
    <div className="w-full bg-gray-300 rounded h-4 overflow-hidden my-2">
      <div
        className={`h-full transition-all duration-500 ease-linear ${
          danger ? 'bg-red-500' : 'bg-green-500'
        }`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
