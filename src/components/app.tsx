import React, { useEffect } from 'react';
import api from '../../services/api';
import { MyBacklogs } from '../pages/MyBacklogs/';
import config from '../../config';

const App = () => {
  useEffect(() => {
    api.getBacklog(5);
  }, []);
  return <MyBacklogs />;
};

export default App;
