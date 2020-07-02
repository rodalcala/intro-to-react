import React, { useReducer } from 'react';
import './App.css';

import RemainingList from './components/RemainingItems';

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

  function addNewItem(itemText) {
    dispatch({ type: 'ADD_ITEM' , itemText });
  }

  function toggleItem(item) {
    dispatch({ type: 'TOGGLE_ITEM' , item });
  }

  return (
    <div>
      <header>
        <h1>
          to-do
        </h1>
      </header>
      <RemainingList state={state} addNewItem={addNewItem} toggleItem={toggleItem} />
    </div>
  );
}

export default App;
