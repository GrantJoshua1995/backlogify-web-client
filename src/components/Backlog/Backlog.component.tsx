import React from 'react';
import { Backlog as BacklogType } from '../../../types';

export interface BacklogProps {
  backlog: BacklogType;
}

export const Backlog: React.SFC<BacklogProps> = ({ backlog }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        width: '20%',
      }}
    >
      <h2>{backlog.name}</h2>
      <ul>
        {backlog.games.map(game => (
          <li>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};
