import React from 'react'
import {CreateTodoButton} from '../CreateTodoButton';

import {TodoCounter} from '../TodoCounter';
import {TodoContext} from '../../TodoContext';
import {TodoItem} from '../TodoItem';
import {TodoList} from '../TodoList';
import {TodoSearch} from '../TodoSearch';
import {Theme} from '../../styles/Theme';
import {Modal} from '../../Modal';
import {TodoForm} from '../TodoForm';
import {EmptyTodos} from '../Loading_skeletons/EmptyTodos';
import {TodosError} from '../Loading_skeletons/TodosError';
import {TodosLoading} from '../Loading_skeletons/TodosLoading';
function AppUi() {
  const {
    loading,
    error,
    openModal,
    setOpenModal,
    filteredTodoList,
    toggleTodo,
    deleteTodo,} = React.useContext(TodoContext);
    {debugger}
  return (
    <Theme theme={"principal"}>
    <TodoCounter />
    <TodoSearch />
    
    <TodoList >
      {loading && <TodosLoading />}
      {error && <TodosError />}
      {!loading && filteredTodoList.length === 0 && <EmptyTodos/>}
      {(!loading && !filteredTodoList.length)} 
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
    
    {openModal && (
    <Modal>
      <TodoForm/>
    </Modal>
    )}

  <CreateTodoButton 
    setOpenModal={setOpenModal}
  />
  </Theme>
    
  )
}

export {AppUi}