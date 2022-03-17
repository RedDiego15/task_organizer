// import './App.css';
import React from 'react';
import {AppUi} from './AppUi';
import {useLocalStorage} from './hooks/useLocalStorage';



function App() {
  const [todoList,setTodoList] = useLocalStorage('TODOS_V1',[]);
  console.log(todoList)

  React.useEffect(() => {
    console.log("use effect");
  })
  
  const [searchValue,setSearchValue] = React.useState('');
  //const [todoList,setTodoList] = React.useState(parsedTodos);
  const realizedTasks = todoList.filter((task) => task.completed).length
  const totalTasks = todoList.length

  const filteredTodoList = todoList.filter((task) => task.text.toLowerCase().includes(searchValue.toLowerCase()));
  
  


  const getIdxCopyList = (text) =>{
    const idx = todoList.findIndex((todo) => todo.text.toLowerCase() === text.toLowerCase() )
    const newTodos = [...todoList]
    return {idx,newTodos}

  }
  const toggleTodo = (text) => {
    let {idx,newTodos} = getIdxCopyList(text);
    let property = newTodos[idx].completed;
    (property)?newTodos[idx].completed=false:newTodos[idx].completed=true;
    setTodoList(newTodos);
  }
  const deleteTodo = (text) => {
    let {idx,newTodos} = getIdxCopyList(text);
    newTodos.splice(idx, 1);
    setTodoList(newTodos);
  }
  


  console.log(todoList)

  return (
    <AppUi 
    realizedTasks ={realizedTasks}
    totalTasks ={totalTasks}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    filteredTodoList = {filteredTodoList}
    toggleTodo = {toggleTodo}
    deleteTodo = {deleteTodo}
    />
  );
}

export default App;
