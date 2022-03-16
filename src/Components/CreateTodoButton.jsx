
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position:relative;
  display:flex;
  justify-content: flex-end;
  margin 10px auto 0;
  max-width: 31rem;
  
  
`
const Button = styled.button`
  position:absolute;
  width:3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  outline:none;
  background-color: #F3F0D7;
  font-size: 2.5rem;
  margin-right:2rem;
  border:none;
  color:#4ab453;

`

function CreateTodoButton(props) {
  return (
    <ButtonContainer>
        <Button
        onClick={() => console.log('click')}
        >+</Button>
    </ButtonContainer>
  )
}
export { CreateTodoButton };
