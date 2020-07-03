import React from 'react';
import { connect } from 'react-redux';

import { toggleItem } from '../redux/actions';

import ItemsList from './ItemsList'

function CompletedItems({ state, toggleItem }) {
  return (
    <main>
      <ItemsList renderCompleted items={state} toggleItem={toggleItem} />
    </main>
  );
}

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = { toggleItem };

export default connect(mapStateToProps, mapDispatchToProps)(CompletedItems);
