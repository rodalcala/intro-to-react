import React from 'react';

function Item({ item, toggleItem }) {
  return (
    <div onClick={() => toggleItem(item)}>
      {item.text}
    </div>
  );
}

export default Item;
