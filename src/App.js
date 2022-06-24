import { useReducer, useState } from 'react';
// import { useState } from 'react';
import './App.css';

const ACTIONS = {
  ADD_TODO: "add_todo"
}

function reducer(to_dos, action) {
  switch (action.type){
    case ACTIONS.ADD_TODO:
      return [...to_dos, newTodo(action.payload.name)];
    default:
      return to_dos;
  }
}

let newTodo = (name) => {
  return {id: Date.now(), name: name, completed: false}
}

function App() {

  const [to_dos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload:{ name: name }});
    setName("");
  }

  console.log(to_dos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={ name } onChange={(e) => setName(e.target.value)} />
        <button>Submit</button>
      </form>
    </>        
  );
}

export default App;
