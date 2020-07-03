import React, { useState } from 'react';
import './App.css';

import RemainingItems from './components/RemainingItems';
import CompletedItems from './components/CompletedItems';

function App() {
  const [showCompleted, setShowCompleted] = useState(false);

  function toggleView() {
    setShowCompleted(e => !e);
  }

  return (
    <div>
      <header>
        <h1>
          to-do
        </h1>
      </header>
      {showCompleted ? <CompletedItems /> : <RemainingItems />}
      <button onClick={toggleView}>
        {showCompleted ? 'SHOW REMAINING ITEMS' : 'SHOW COMPLETED ITEMS'}
      </button>
    </div>
  );
}

export default App
