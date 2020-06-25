import React from 'react';
import './App.css';

import RemainingList from './components/RemainingItems';

function App() {
  return (
    <div>
      <header>
        <h1>
          to-do
        </h1>
      </header>
      <RemainingList />
    </div>
  );
}

export default App;
