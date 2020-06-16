import { createStore } from "redux";

// action types
const ADD_ITEM = "ADD_ITEM";
const TOGGLE_ITEM = "TOGGLE_ITEM";

// action creators
let nextId = 0;
export const addItem = (text) => ({
  type: ADD_ITEM,
  id: nextId++,
  text,
});
export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  id,
});

// initial state
const initialState = { items: [] };

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        id: action.id,
        text: action.text,
        bought: false,
      };
      return { ...state, items: [...state.items, newItem] };
    case TOGGLE_ITEM:
      const items = state.items.map((item) =>
        item.id === action.id
          ? { ...item, bought: !item.bought }
          : item
      );
      return { ...state, items };
    default:
      return state;
  }
}

// store
const store = createStore(reducer);
export default store;
