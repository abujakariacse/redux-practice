// Select DOM Element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Initial State
const initialState = {
  counter: 0,
};

// Counter Reducer function

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter > 0 ? state.counter - 1 : state.counter,
    };
  } else {
    return state;
  }
};

// Create store
const store = Redux.createStore(counterReducer);

// Update UI
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.counter;
};

// Subscribe to store
store.subscribe(render);

// Action dispatch
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});
decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
