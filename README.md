0. Add [<script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>] this to import redux on your project and create a script.js file and connect it with  
   index.html file. Write codes on script.js file to manage state using redux. Code are below:-

1. Declare initialState as a object. like
   const initialState = ()=>{
   value: 0
   }

2. Create a Reducer function. That will take a state and action. State will be equal initialState as initially. action means what type of operation will be happen there.
   const counterReducer = (state = initialState, action) =>{
   if (action.type === "increment") {
   return {
   ...state,
   value: state.value + 1,
   };
   } else if (action.type === "decrement") {
   if (state.value > 0) {
   return {
   ...state,
   value: state.value - 1,
   };
   }
   } else {
   return state;
   }
   }
3. Create a store for Redux to store state.And store will take one parameter that is Reducer function
   const store = Redux.createStore(counterReducer);

4.Create Render function, Get value from store and set innerText of DOM. And call the function to get initial value on UI
const render = () => {
const state = store.getState();
countEl.innerText = state.value;
};
render();

5. Subscribe to store for getting value. It will take a function
   store.subscribe(render);

6. AddEventListener to button to dispatch action and send your action via type object
   IncreaseButton.addEventListener("click",()=>{
   store.dispatch({
   type: "increment"
   })
   })
