import React from 'react';
import { connect } from 'react-redux';

import { addNewItem, toggleItem } from '../redux/actions';

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

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = { addNewItem, toggleItem };

export default connect(mapStateToProps, mapDispatchToProps)(RemainingItems);
