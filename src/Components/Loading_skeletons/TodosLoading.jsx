import React from 'react'
import styled from 'styled-components';
import { keyframes } from 'styled-components'

const ContainerAnimation = styled.div`
  position:absolute;
  height:100%;
  width:100%;
`
const translate = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(18rem);
  }
`;
const AnimatedBlock = styled.div`
  width: 10rem;
  height:100%;
  border-radius:10px;
  background: linear-gradient(90deg, rgba(219,219,219,0) 0%, rgba(102,99,99,1) 53%, rgba(204,204,204,1) 100%);
  animation: ${translate} 1.3s linear infinite;
`
const ListItem = styled.li`
  position:relative;
  display:flex;
  justify-content:start;
  align-items:center;
  width: 100%;
  list-style: none;
  margin:0.5rem 0;
  background-color: grey;
  box-shadow: 3px 3px 5px 0px #141615;
`

  const Circle = styled.div`
  background-color: black;
  border-radius:50%;
  min-width:40px;
  height:40px;
  cursor:pointer;
    &:hover{
        background-color:white;
       
    }
`

const LoadingContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    gap:10px;

`
const LoadingFirstBar = styled.div`
  width:10rem;
  background-color:#5E454B;
  height:10px;
  border-radius:5px;

`
const LoadingSecondBar = styled(LoadingFirstBar)`
    width: 6rem;
`



function TodosLoading() {
  return (
    
    <ListItem>
      <Circle/>
      <LoadingContainer>
        <LoadingFirstBar />
        <LoadingSecondBar />
      </LoadingContainer>
      <ContainerAnimation>
        <AnimatedBlock/>
      </ContainerAnimation>
      
    </ListItem>

  )
}
export { TodosLoading };