import React, { useEffect, useState, useCallback } from 'react';
import api from '../../../services/api';
import { Backlog as BacklogType } from '../../../types';
import { Backlog } from '../../components/Backlog';

export interface MyBacklogsProps {}

export const MyBacklogs: React.FC<MyBacklogsProps> = () => {
  const [backlogs, setBacklogs] = useState<BacklogType[]>([]);

  const getUserBacklogs = useCallback(async () => {
    const userBacklogs = await api.getUserBacklogs(1);
    setBacklogs(userBacklogs);
  }, [backlogs]);

  useEffect(() => {
    getUserBacklogs();
  }, []);

  return (
    <div>
      <h1>Hello welcome to my backlogs</h1>
      {backlogs.length > 0 && (
        <div style={{ display: 'flex' }}>
          {backlogs.map(backlog => {
            return <Backlog key={backlog.id} backlog={backlog} id={backlog.id} />;
          })}
          <div
            style={{
              border: '1px solid black',
              height: '500px',
              width: '200px',
              background: '#E5EFF5',
              marginRight: '1em',
              borderRadius: '5px',
              opacity: '0.2',
            }}
          >
            <h3>Add new backlog...</h3>
          </div>
        </div>
      )}
    </div>
  );
};
