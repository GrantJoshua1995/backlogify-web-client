import React, { useEffect, useState, useCallback } from 'react';
import api from '../../../services/api';
import { Backlog as BacklogType } from '../../../types';
import { Backlog } from '../../components/Backlog';
import useDebounce from '../../../services/debounce';

export interface MyBacklogsProps {}

export const MyBacklogs: React.FC<MyBacklogsProps> = () => {
  const [backlogs, setBacklogs] = useState<BacklogType[]>([]);
  const [gameSearch, setGameSearch] = useState<string>('');
  const [gameList, setGameList] = useState<[]>([]);

  const debouncedSearchTerm = useDebounce(gameSearch, 250);

  const getUserBacklogs = useCallback(async () => {
    const userBacklogs = await api.getUserBacklogs(1);

    setBacklogs(userBacklogs);
  }, [backlogs]);

  const updateGameSearch = useCallback(event => {
    setGameList([]);
    setGameSearch(event.target.value);
  }, []);

  const getIgdbGames = useCallback(async () => {
    const igdbGames = await api.getIgdbGames(gameSearch);
    setGameList(igdbGames);
  }, [gameSearch]);

  useEffect(() => {
    if (debouncedSearchTerm.length >= 3) {
      getIgdbGames();
    }
  }, [debouncedSearchTerm]);

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
          <a>
            <span>Add another backlog...</span>
          </a>
        </div>
      )}
      {/* Placeholder input just to prove searching for games works */}
      <input placeholder='Search here!' value={gameSearch} onChange={updateGameSearch} />
      {gameList.length > 0 && (
        <ul>
          {gameList.map(game => {
            return <li>{game.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
