import React from 'react'
import styled from "styled-components";

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
  return (
    <Header>
      <Title>Tasks</Title>
      <Counter>Completed {props.realizedTasks} of {props.totalTasks} tasks</Counter>
    </Header>
  )
}
export {TodoCounter};

