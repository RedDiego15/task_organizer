// import './App.css';
import React from 'react';
import {CreateTodoButton} from './Components/CreateTodoButton';
import {TodoCounter} from './Components/TodoCounter';
import {TodoItem} from './Components/TodoItem';
import {TodoList} from './Components/TodoList';
import {TodoSearch} from './Components/TodoSearch';
import {Theme} from './styles/Theme';


const lista = [
  {
    text:"Descripcion tarea",
    completed:true,
  },
  {
    text:"Descripcion tarea2",
    completed:true,
  },
  {
    text:"Descripcion tarea3",
    completed:false,
  },
  {
    text:"Descripcion tarea4",
    completed:false,
  },
  {
    text:"Descripcion tarea5",
    completed:false,
  },
  {
    text:"Descripcion tarea6",
    completed:false,
  },
  {
    text:"Descripcion tarea16",
    completed:false,
  },
  {
    text:"Descripcion tarea7",
    completed:false,
  },
  {
    text:"Descripcion tarea8",
    completed:false,
  },
  {
    text:"Descripcion tarea9",
    completed:false,
  },

]

function App() {
  return (
    <Theme theme={"principal"}>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        {
          lista.map(todo => {
            console.log(todo);
            return <TodoItem key = {todo.text} lista={todo}/>
          })
        }
      </TodoList >
      <CreateTodoButton />
    </Theme>
  );
}

export default App;
