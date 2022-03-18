import React from 'react'
import {CreateTodoButton} from '../CreateTodoButton';

import {TodoCounter} from '../TodoCounter';
import {TodoContext} from '../../TodoContext';
import {TodoItem} from '../TodoItem';
import {TodoList} from '../TodoList';
import {TodoSearch} from '../TodoSearch';
import {Theme} from '../../styles/Theme';

function AppUi() {
  const {
    loading,
    error,
    realizedTasks,
    totalTasks,
    searchValue,
    setSearchValue,
    filteredTodoList,
    toggleTodo,
    deleteTodo,} = React.useContext(TodoContext);

  return (
    <Theme theme={"principal"}>
    <TodoCounter />
    <TodoSearch />
    
    <TodoList >
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      {(!loading && !filteredTodoList.length) && <p>Create your first to do</p>} 
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