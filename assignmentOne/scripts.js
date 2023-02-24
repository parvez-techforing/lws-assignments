//select DOM elements
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const counterEl = document.getElementById('counter');
const addMatchEl = document.getElementById('add-match');
const addMatchScoreEl = document.querySelector('.all-matches');
const resetEl = document.getElementById('reset');
const deleteEl = document.querySelector('.lws-delete');

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

//initial state
const initialState = {
  value: 0
}

//action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value
  }
}

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value
  }
}

//create reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload
      }
    default:
      return state;
  }
}

//create store
const store = Redux.createStore(counterReducer);

//render function
const render = () => {
  //get state from store
  const state = store.getState();
  //update DOM
  counterEl.innerHTML = state.value;
  console.log("counterEl:", counterEl.innerHTML);
}

//update DOM on load
render();

//subscribe to store
store.subscribe(render);

//dispatch actions
incrementEl.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    const value = parseInt(e.target.value);
    store.dispatch(increment(value));
  }
});

decrementEl.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    const value = parseInt(e.target.value);
    store.dispatch(decrement(value));
  }
});


//add match
addMatchEl.addEventListener('click', function() {
  //dynamic match number counter
  const matchNumber = document.querySelectorAll('.match').length + 1;
  //create match score div
  const matchScore = document.createElement('div');
  matchScore.classList.add('match');
  matchScore.innerHTML = `
                    <div class="wrapper">
                        <button class="lws-delete">
                            <img src="./image/delete.svg" alt="" />
                        </button>
                        <h3 class="lws-matchName">Match ${matchNumber}</h3>
                    </div>
                    <div class="inc-dec">
                        <form class="incrementForm">
                            <h4>Increment</h4>
                            <input
                                type="number"
                                name="increment"
                                class="lws-increment"
                                id="increment"
                            />
                        </form>
                        <form class="decrementForm">
                            <h4>Decrement</h4>
                            <input
                                type="number"
                                name="decrement"
                                class="lws-decrement"
                                id="decrement"
                            />
                        </form>
                    </div>
                    <div class="numbers">
                        <h2 class="lws-singleResult" id="counter">120</h2>
                    </div>
                </div>
  `;
  addMatchScoreEl.appendChild(matchScore);
});

//reset all matches scores
resetEl.addEventListener('click', function() {
  const allMatches = document.querySelectorAll('.match');
  allMatches.forEach((match) => {
    //clear all matches scores
    match.querySelector('#counter').innerHTML = 0;
    //clear all matches increment and decrement values
    match.querySelector('#increment').value = '';
    match.querySelector('#decrement').value = '';
  });
});

//delete particular match
deleteEl.addEventListener('click', function(e) {
  e.target.parentElement.parentElement.parentElement.remove();
});






