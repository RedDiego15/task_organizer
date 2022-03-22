import React from 'react'
import styled from 'styled-components'
import EmptyList from '../../assets/EmptyList.svg'

const ContainerError = styled.div`
  width:100%;
  height:100%;
  display:flex;
` 
const ContainerText = styled(ContainerError)`
  flex-direction: column;
  gap:10px;
`
const Figure = styled.figure`
  width:100%;
  height:100%;

`
const Logo = styled.img`
  width:100%;
  height:100%;
`
const Text = styled.p`
  text-align:start;
`

function EmptyTodos() {
  return (
    <ContainerError>
      <Figure>
        <Logo src = {EmptyList}/>
      </Figure>
      <ContainerText>
        <Text>It looks like there nothing else todo.</Text>
        <Text>Add a new todo with + Button</Text>
      </ContainerText>
    </ContainerError>
  )
}

export  {EmptyTodos}