import { useReducer, useState } from 'react';
import Todo from './Todo';
import './App.css';

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo"
}

function reducer(to_dos, action) {

  switch (action.type){
    case ACTIONS.ADD_TODO:
      return [...to_dos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return to_dos.map(to_do => {
        if(to_do.id === action.payload.id){
          return { ...to_do, complete: !to_do.complete };
        } else {
          return to_do;
        }
      })
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
      {
        to_dos.map((todo) => {
          return (
            <ul>
              <li>
                <Todo key={todo.id} todo={todo} dispatch={dispatch} />
              </li>
            </ul>
          )
        })
      }
    </>        
  );
}

export default App;
