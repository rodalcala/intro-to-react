import React, { useReducer, useState } from 'react';
import './App.css';

import RemainingItems from './components/RemainingItems';
import CompletedItems from './components/CompletedItems';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { text: action.itemText, completed: false }];
    case 'TOGGLE_ITEM':
      return state.map((item) =>
        item.text === action.item.text ? { ...item, completed: !item.completed } : item
      );
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showCompleted, setShowCompleted] = useState(false);

  function addNewItem(itemText) {
    dispatch({ type: 'ADD_ITEM', itemText });
  }

  function toggleItem(item) {
    dispatch({ type: 'TOGGLE_ITEM', item });
  }

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

export default App;
