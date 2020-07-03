import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { addNewItem, toggleItem } from './redux/actions';
import RemainingItems from './components/RemainingItems';
import CompletedItems from './components/CompletedItems';

function App({ state, addNewItem, toggleItem }) {
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
      {
        showCompleted
        ? <CompletedItems state={state} toggleItem={toggleItem} />
        : <RemainingItems state={state} addNewItem={addNewItem} toggleItem={toggleItem} />
      }
      <button onClick={toggleView}>
        {showCompleted ? 'SHOW REMAINING ITEMS' : 'SHOW COMPLETED ITEMS'}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({ state })

const mapDispatchToProps = { addNewItem, toggleItem };

export default connect(mapStateToProps, mapDispatchToProps)(App);
