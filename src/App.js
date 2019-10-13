import React from 'react';

import { DataProvider } from './components/DataContext';
import TaskList from './components/TaskList/TaskList';
import Sider from './components/Sider/Sider';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <Sider />
        <TaskList />
      </div>
    </DataProvider>
  );
}

export default App;
