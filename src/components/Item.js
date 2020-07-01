import React from 'react';

function Item({ text, removeItem }) {
  return (
    <div onClick={() => removeItem(text)}>
      {text}
    </div>
  );
}

export default Item;
