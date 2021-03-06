// import './App.css';
import React from 'react';

import {Theme} from '../../styles/Theme';
import {Header} from '../Header'
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {useTodos} from './hooks/useTodos';
import {TodoItem} from '../TodoItem';
import {TodoList} from '../TodoList';
import {TodoSearch} from '../TodoSearch';
import {CreateTodoButton} from '../CreateTodoButton';
import {Modal} from '../../Modal';
import {TodoForm} from '../TodoForm';
import {EmptyTodos} from '../Loading_skeletons/EmptyTodos';
import {TodosError} from '../Loading_skeletons/TodosError';
import {TodosLoading} from '../Loading_skeletons/TodosLoading';
import {ChangeAlertWithStorageLister} from '../ChangeAlert/ChangeAlert';
function App() {

  const {state,stateUpdater} = useTodos();
  const {
    loading,
    error,
    totalTasks,
    realizedTasks,
    searchValue,
    filteredTodoList,
  } = state;

  const {
    openModal,
    setOpenModal,
    toggleTodo,
    deleteTodo,
    setSearchValue,
    addTodo,
    setSincronizedItem,
  } = stateUpdater;

  return (
    <Theme theme={"principal"}>
      <Header >
        
        <TodoCounter totalTasks={totalTasks} realizedTasks={realizedTasks} loading={loading} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loading}/>
        
      </Header>

      <TodoList 
        error={error}
        loading={loading}
        filteredTodoList = {filteredTodoList}
        totalTasks = {totalTasks}
        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading/>}
        onEmptyTodos = {() => <EmptyTodos/>}
        onEmptySearchResults = {() => <p> there's no match for {searchValue} </p>}
        render = {todo => {
          return <TodoItem 
            key = {todo.text} 
            todo={todo}
            onComplete = {()=> toggleTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)} 
            />
        }}

      />      
      {openModal && (
      <Modal>
        <TodoForm 
        addTodo={addTodo}
        setOpenModal = {setOpenModal}
      />
      </Modal>
      )}

    <CreateTodoButton 
      setOpenModal={setOpenModal}
    />
    <ChangeAlertWithStorageLister setSincronizedItem={setSincronizedItem}/>
  </Theme>
    
  )
}

export default App;
