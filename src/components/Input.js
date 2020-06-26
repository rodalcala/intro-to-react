import React, { useState } from 'react';

function Input({ addNewItem }) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    if (inputValue) addNewItem(inputValue);
    setInputValue('');

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputValue} />
      <button type='submit'>TUVIEJA</button>
    </form>
  );
}

export default Input;
