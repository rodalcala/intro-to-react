const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { text: action.itemText, completed: false }];
    case 'TOGGLE_ITEM':
      return state.map((item) =>
        item.text === action.item.text ? { ...item, completed: !item.completed } : item
      );
    default:
      return state;
  }
}

export default reducer;
