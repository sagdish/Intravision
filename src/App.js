import React from 'react';

import { DataProvider } from './components/DataContext';
import TaskList from './components/TaskList/TaskList';
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <TaskList />
      </div>
    </DataProvider>
  );
}

export default App;
