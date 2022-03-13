// import './App.css';
import React from 'react';
import {CreateTodoButton} from './Components/CreateTodoButton';
import {TodoCounter} from './Components/TodoCounter';
import {TodoItem} from './Components/TodoItem';
import {TodoList} from './Components/TodoList';
import {TodoSearch} from './Components/TodoSearch';


const lista = [
  {
    text:"Descripcion tarea",
    completed:false,
  },
  {
    text:"Descripcion tarea2",
    completed:false,
  },
  {
    text:"Descripcion tarea3",
    completed:false,
  },
  {
    text:"Descripcion tarea5",
    completed:false,
  },

]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        {
          lista.map(todo => {
            console.log(todo);
            return <TodoItem key = {todo.text} text={todo.text}/>
          })
        }
      </TodoList >
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
