import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  position:relative;
  display:flex;
  justify-content: center;
  height:23rem;

  
`
const ListItem = styled.ul`
  max-width:30rem;
  width:80%;
  display: flex;
  flex-direction: column;
  overflow-y:scroll;
  padding-right:1rem;
  
`

function TodoList(props) {
  return (
    <Section>
      <ListItem>
        {props.children}
      </ListItem>
    </Section>
  )
}
export { TodoList };