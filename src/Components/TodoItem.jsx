import React from 'react'
import styled from 'styled-components';
import DelIcon from '../assets/del_icon.png'
import OkIcon from '../assets/ok_icon.png';

const ListItem = styled.li`
  position:relative;
  display:flex;
  justify-content:space-around;
  align-items:center;
  width: 100%;
  list-style: none;
  margin:0.5rem 0;
  background-color: ${props => (props.completed ? '#5d5c54bf' : '#cac0a7b3;')};
  box-shadow: 3px 3px 5px 0px #141615;

`

const DeleteIcon = styled.span`
  background-image: url(${DelIcon});
  background-repeat:no-repeat;
  cursor:pointer;
  min-width: 40px;
  height:40px;
    &:hover{
      background-color: red;
      border-radius: 50%;
    }
`
  const Circle = styled.div`
  background-color: #bae0bd;
  border: 2px solid #83b591;
  border-radius:50%;
  min-width:40px;
  height:40px;
  cursor:pointer;
    &:hover{
        background-color:white;
       
    }
`
const OkeyIcon = styled.span`
  background-image: url(${OkIcon});
  background-repeat:no-repeat;
  cursor:pointer;
  min-width: 40px;
  height:40px;
`
const Parrafo = styled.p`
  padding: 10px 0;
  width: 72%;
  text-align: center;
`



function TodoItem(props) {
  const {todo,onComplete,onDelete} = props;
  let button;
  if(todo.completed){
    button = <OkeyIcon onClick={onComplete}/>
  }else{
    button = <Circle onClick={onComplete}/>
  }

  return (
    <ListItem completed = {todo.completed}>
      {button}
      <Parrafo>{todo.text}</Parrafo>
      <DeleteIcon
      onClick={onDelete}
      />
    </ListItem>
  )
}
export { TodoItem };
