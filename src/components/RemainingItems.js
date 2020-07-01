import React, { useReducer } from 'react';

import ItemsList from './ItemsList'
import Input from './Input'

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

function RemainingItems() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addNewItem(item) {
    dispatch({ type: 'ADD_ITEM' , item });
  }

  function removeItem(completedItem) {
    dispatch({ type: 'COMPLETE_ITEM' , completedItem });
  }

  return (
    <main>
      <ItemsList items={state} removeItem={removeItem} />
      <Input addNewItem={addNewItem} />
    </main>
  );
}

export default RemainingItems;
