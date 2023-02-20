//select DOM elements
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const counterEl = document.getElementById('counter');
const addMatchEl = document.getElementById('add-match');

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creators
const increment = () => {
  return {
    type: INCREMENT
  }
}

const decrement = () => {
  return {
    type: DECREMENT
  }
}

//initial state
const initialState = {
  value: 0
}

//create reducer function
const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        value: state.value + 1
      }
    case DECREMENT:
      return {
        value: state.value - 1
      }
    default:
      return state;
  }
}

//create store
const store = Redux.createStore(counterReducer);

//render function
const render = () => {
  counterEl.innerHTML = store.getState().value;
}

//update DOM on load
render();

//subscribe to store
store.subscribe(render);

//dispatch actions
incrementEl.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    store.dispatch(increment());
  }
});

decrementEl.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    store.dispatch(decrement());
  }
});


//add match
addMatchEl.addEventListener('click', function() {
  console.log('add match');
});






