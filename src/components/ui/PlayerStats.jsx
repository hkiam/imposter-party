import React from 'react';

export default function PlayerStats({ players, highscore }) {
  const sortedPlayers = [...players].sort((a, b) => {
    const aScore =
      (highscore[a.name]?.wins ?? 0) * 2 - (highscore[a.name]?.losses ?? 0);
    const bScore =
      (highscore[b.name]?.wins ?? 0) * 2 - (highscore[b.name]?.losses ?? 0);
    return bScore - aScore;
  });

  return (
    <ul className="text-sm space-y-1">
      {sortedPlayers.map((p, index) => (
        <li
          key={p.name}
          className="flex justify-between bg-white rounded p-2 shadow"
        >
          <span>
            {index === 0 && '🥇 '}
            {index === 1 && '🥈 '}
            {index === 2 && '🥉 '}
            {p.name}
          </span>
          <span>
            {highscore[p.name]?.wins ?? 0} Siege /{' '}
            {highscore[p.name]?.losses ?? 0} Niederlagen / Punkte:{' '}
            {(highscore[p.name]?.wins ?? 0) * 2 -
              (highscore[p.name]?.losses ?? 0)}
          </span>
        </li>
      ))}
    </ul>
  );
}
