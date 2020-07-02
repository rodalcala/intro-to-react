import React from 'react';

import ItemsList from './ItemsList'
import Input from './Input'

function RemainingItems({ state, addNewItem, removeItem }) {
  return (
    <main>
      <ItemsList items={state} removeItem={removeItem} />
      <Input addNewItem={addNewItem} />
    </main>
  );
}

export default RemainingItems;
