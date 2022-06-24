import { useReducer } from 'react';
// import { useState } from 'react';
import './App.css';

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1};
    case ACTIONS.DECREMENT:
      return { count: state.count - 1};
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  let increment = () => dispatch({ type: ACTIONS.INCREMENT })
  let decrement = () => dispatch({ type: ACTIONS.DECREMENT})

  // let [count, setCount] = useState(0);
  // let increment = () => setCount(count += 1);
  // let decrement = () => setCount(count -= 1);

  return (
    <div className="App">
      <button className="increment" onClick={increment}>+</button>
      <h1>{ state.count }</h1>
      <button className="decrement" onClick={decrement}>-</button>
    </div>
  );
}

export default App;
