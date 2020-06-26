import React from 'react';

function Item({ text, removeItem, index }) {
  return (
    <div onClick={() => removeItem(index)}>
      {text}
    </div>
  );
}

export default Item;
