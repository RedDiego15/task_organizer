import React from 'react'
import styled from 'styled-components'
import SrcError from '../../assets/Engranaje.svg'
const ContainerError = styled.div`
  width:100%;
  height:100%;

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
  text-align:center;
`

function TodosError() {
  return (
    <ContainerError>
      <Figure>
        <Logo src = {SrcError}/>
      </Figure>
      <Text>Error has been occurred, Please try again Later</Text>
    </ContainerError>
    
  )
}

export {TodosError}