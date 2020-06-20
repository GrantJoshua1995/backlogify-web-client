import React, { useEffect, useState, useCallback } from 'react';
import api from '../../../services/api';
import { Backlog as BacklogType } from '../../../types';
import { Backlog } from '../../components/Backlog';

export interface MyBacklogsProps {}

export const MyBacklogs: React.FC<MyBacklogsProps> = () => {
  const [backlog, setBacklog] = useState<BacklogType | null>(null);

  const getBacklog = useCallback(async () => {
    const activeBacklog = await api.getBacklog(5);
    setBacklog(activeBacklog);
  }, []);

  useEffect(() => {
    getBacklog();
  }, []);
  return (
    <div>
      <h1>Hello welcome to my backlogs</h1>
      {backlog && (
        <>
          <Backlog backlog={backlog} />
        </>
      )}
    </div>
  );
};
