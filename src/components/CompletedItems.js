import React from 'react';

import ItemsList from './ItemsList'

function CompletedItems({ state, toggleItem }) {
  return (
    <main>
      <ItemsList renderCompleted items={state} toggleItem={toggleItem} />
    </main>
  );
}

export default CompletedItems;
