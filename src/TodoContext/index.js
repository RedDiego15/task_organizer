import React from 'react';
import {useLocalStorage} from './useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider(props){
    const {item:todoList
        ,savedLocalTodoList:setTodoList,
        loading,
        error
      } = useLocalStorage('TODOS_V1',[]);
  console.log(todoList)
  

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

    return (
        <TodoContext.Provider value ={{
            loading,
            error,
            realizedTasks,
            totalTasks,
            searchValue,
            setSearchValue,
            filteredTodoList,
            toggleTodo,
            deleteTodo,

        }}>
            {props.children}

        </TodoContext.Provider>
    )

}

export {TodoContext,TodoProvider};