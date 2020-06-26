import React from 'react';

import Item from './Item'

function ItemsList({ items, removeItem }) {
  return (
    <div>
      {items.map((item, index) => <Item removeItem={removeItem} index={index} key={index} text={item} />)}
    </div>
  );
}

export default ItemsList;
