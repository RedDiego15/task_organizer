import React from 'react'
import styled from "styled-components";
import { TodoContext } from '../TodoContext';

const Header = styled.header`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin:1rem;
`;
const Title = styled.h2`
  color:#5E454B;
`
const Counter = styled.p`
  font-size:1.4rem;
  line-height:2rem;
  color:#5E454B;

`
function TodoCounter(props) {

  const {totalTasks,realizedTasks} = React.useContext(TodoContext)

  React.useEffect(()=>{
    let pendingTasks =totalTasks - realizedTasks

    if(pendingTasks !==0){
      document.title = `Pending ${pendingTasks} Task`;
    }else{
      document.title = `No Pending Task`;

    }
  },[realizedTasks])
  return (
    <Header>
      <Title>Tasks</Title>
      <Counter>Completed {realizedTasks} of {totalTasks} tasks</Counter>
    </Header>
  )
}
export {TodoCounter};

