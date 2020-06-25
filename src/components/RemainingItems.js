import React, { useReducer } from 'react';

import ItemsList from './ItemsList'
import Input from './Input'

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'COMPLETE_ITEM':
      const newState = [...state];
      newState.splice(action.itemIndex, 1);
      return newState
    default:
      throw new Error();
  }
}

function RemainingItems() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addNewItem(item) {
    dispatch({ type: 'ADD_ITEM' , item });
  }

  function removeItem(itemIndex) {
    dispatch({ type: 'COMPLETE_ITEM' , itemIndex });
  }

  return (
    <main>
      <ItemsList items={state} removeItem={removeItem} />
      <Input addNewItem={addNewItem} />
    </main>
  );
}

export default RemainingItems;
