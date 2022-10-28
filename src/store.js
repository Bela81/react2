import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "COLOR") {
    state = action.payload;
    return state;
  }

  return state;
};

const store = createStore(reducer, "blue");

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
