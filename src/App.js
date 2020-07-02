import React, { useReducer } from 'react';
import './App.css';

import RemainingList from './components/RemainingItems';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'COMPLETE_ITEM':
      return state.filter((item) => !(item === action.completedItem));
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addNewItem(item) {
    dispatch({ type: 'ADD_ITEM' , item });
  }

  function removeItem(completedItem) {
    dispatch({ type: 'COMPLETE_ITEM' , completedItem });
  }

  return (
    <div>
      <header>
        <h1>
          to-do
        </h1>
      </header>
      <RemainingList state={state} addNewItem={addNewItem} removeItem={removeItem} />
    </div>
  );
}

export default App;
