// Select DOM Element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Initial State
const initialState = {
  counter: 0,
};

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// Counter Reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      counter:
        state.counter > 0 ? state.counter - action.payload : state.counter,
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

// update UI Initially
render();

// Subscribe to store
store.subscribe(render);

// Action dispatch
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});
decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(3));
});
