import React from 'react'
import styled from 'styled-components';
import DelIcon from '../assets/del_icon.png'
import {MarkTaskButton} from './MarkTaskButton'

const ListItem = styled.li`
  position:relative;
  display:flex;
  justify-content:space-around;
  align-items:center;
  width: 100%;
  min-height:2.5rem;
  list-style: none;
  margin:0.5rem 0;
  background-color: #cac0a7b3;
  box-shadow: 3px 3px 5px 0px #141615;
`

const DeleteIcon = styled.span`
  background-image: url(${DelIcon});
  background-repeat:no-repeat;
  width: 40px;
  height:40px;
  `


function TodoItem(props) {
  const OnDelete = () =>{
    alert('has eliminado el task')
}
  
  return (
    <ListItem>
      <MarkTaskButton isDone={props.lista.completed}
      
      ></MarkTaskButton>
      <p>{props.lista.text}</p>
      <DeleteIcon
      onClick={OnDelete}
      />
    </ListItem>
  )
}
export { TodoItem };
