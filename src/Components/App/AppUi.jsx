import React from 'react'
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoCounter} from '../TodoCounter';
import {TodoItem} from '../TodoItem';
import {TodoList} from '../TodoList';
import {TodoSearch} from '../TodoSearch';
import {Theme} from '../../styles/Theme';

function AppUi({
    realizedTasks,
    totalTasks,
    searchValue,
    setSearchValue,
    filteredTodoList,
    toggleTodo,
    deleteTodo
}) {
  return (
    <Theme theme={"principal"}>
    <TodoCounter 
    realizedTasks ={realizedTasks}
    totalTasks ={totalTasks}/>
    <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    <TodoList >
      {
        filteredTodoList.map(todo => {
          return <TodoItem 
            key = {todo.text} 
            lista={todo}
            onComplete = {()=> toggleTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)} 
            />
        })
      }
    </TodoList >
    <CreateTodoButton />
  </Theme>
    
  )
}

export {AppUi}