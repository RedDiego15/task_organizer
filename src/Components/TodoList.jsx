import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  position:relative;
  display:flex;
  justify-content: center;
  height:23rem;

  
`
const ListItem = styled.ul`
  max-width:40rem;
  width:80%;
  display: flex;
  flex-direction: column;
  overflow-y:auto;
  overflow-x: hidden;
  background-color: #bcb39e78;
  padding: 10px;
  padding-right:1rem;
  border-radius: 5px;
    &::-webkit-scrollbar{
      background-color: white;
      color: grey;
      display: inline-block;
      width: 6px;
      border-radius: 5px
    }
    &::-webkit-scrollbar-thumb{
      background-color: #5e454b;
      border-radius: 5px;
      width: 0.2rem;
  }
  
`

function TodoList({error
  ,loading,
  filteredTodoList,
  searchValue,
  totalTasks,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  render

}) {
  return (
    <Section>
      
      <ListItem>
        {error && onError()}
        {!loading && totalTasks===0 && onEmptyTodos()}
        {!loading && !filteredTodoList.length && !searchValue==='' && onEmptySearchResults()}
        {loading && onLoading()}
        {filteredTodoList.map((todo) =>render(todo) ) }

      </ListItem>
    </Section>
  )
}
export { TodoList };