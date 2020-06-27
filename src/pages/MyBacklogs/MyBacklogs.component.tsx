import React, { useEffect, useState, useCallback } from 'react';
import api from '../../../services/api';
import { Backlog as BacklogType } from '../../../types';
import { Backlog } from '../../components/Backlog';

export interface MyBacklogsProps {}

export const MyBacklogs: React.FC<MyBacklogsProps> = () => {
  const [backlogs, setBacklogs] = useState<BacklogType[]>([]);
  const [newBacklogFocus, setNewBacklogFocus] = useState<boolean>(false);

  const getUserBacklogs = useCallback(async () => {
    const userBacklogs = await api.getUserBacklogs(1);
    setBacklogs(userBacklogs);
  }, [backlogs]);

  useEffect(() => {
    document.title = 'Backlogify - My Backlogs';
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
              opacity: newBacklogFocus ? '1' : '0.2',
            }}
            onClick={() => {
              setNewBacklogFocus(true);
            }}
            onBlur={() => {
              setNewBacklogFocus(false);
            }}
          >
            <h3 contentEditable={newBacklogFocus ? true : false}>Add new backlog... </h3>
          </div>
        </div>
      )}
    </div>
  );
};
