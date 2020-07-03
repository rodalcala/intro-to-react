export const addNewItem = (itemText) => ({
  type: 'ADD_ITEM',
  itemText
});

export const toggleItem = (item) => ({
  type: 'TOGGLE_ITEM',
  item
});
