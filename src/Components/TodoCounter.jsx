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
function TodoCounter() {
  return (
    <Header>
      <Title>Tasks</Title>
      <Counter>Completed 2 of 4</Counter>
    </Header>
  )
}
export {TodoCounter};

