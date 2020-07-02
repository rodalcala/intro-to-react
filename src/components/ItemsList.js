import React from 'react';

import Item from './Item'

function ItemsList({ renderCompleted = false, items, toggleItem }) {
  return items.map((item, index) =>
    item.completed === renderCompleted && <Item toggleItem={toggleItem} key={index} item={item} />
  );
}

export default ItemsList;
