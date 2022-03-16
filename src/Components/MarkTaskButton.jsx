import React from 'react'
import styled from 'styled-components';
import OkIcon from '../assets/ok_icon.png';

const Circle = styled.div`
  background-color: #bae0bd;
  border: 2px solid #83b591;
  border-radius:50%;
  width:40px;
  height:40px;
  cursor:pointer;
    &:hover{
        background-color:white;
       
    }
`
const OkeyIcon = styled.span`
  background-image: url(${OkIcon});
  background-repeat:no-repeat;
  width: 40px;
  height:40px;
  `
function MarkTaskButton(props) {
    const OnComplete = () =>{
        alert('has completo el task')
    }
    
    const isDone = props.isDone;
    console.log(isDone);
    if(isDone) {
        return (
            <OkeyIcon
            onClick={OnComplete}/>
        )  
    }
    return (<Circle
        onClick={OnComplete}/>)
    
}

export {MarkTaskButton};

