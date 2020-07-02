import React from 'react';

import ItemsList from './ItemsList'
import Input from './Input'

function RemainingItems({ state, addNewItem, toggleItem }) {
  return (
    <main>
      <ItemsList items={state} toggleItem={toggleItem} />
      <Input addNewItem={addNewItem} />
    </main>
  );
}

export default RemainingItems;
