import React from 'react';
import { Backlog as BacklogType } from '../../../types';
import { BacklogItem } from '../BacklogItem/';

export interface BacklogProps {
  backlog: BacklogType;
  id: number;
}

export const Backlog: React.SFC<BacklogProps> = ({ backlog, id }) => {
  return (
    <div
      id={'backlog' + id}
      style={{
        border: '1px solid black',
        height: '500px',
        width: '200px',
        background: '#E5EFF5',
        marginRight: '1em',
        borderRadius: '5px',
      }}
    >
      <h3>{backlog.name}</h3>
      {backlog.games.map(game => (
        <BacklogItem name={game.name} />
      ))}
    </div>
  );
};
