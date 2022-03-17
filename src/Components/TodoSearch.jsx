import React from 'react';
import styled from 'styled-components';
import Search_icon from '../assets/search_icon.png';

const Input = styled.input`
  position:relative;
  border:10rem;
  height: 1.5rem;
  padding: 1rem;
  border-radius:1rem;
  border-color:#F3F0D7;
  outline:none;
    &::placeholder{
      color:grey;
    }
  
  
`
const Icon = styled.img`
  position:absolute;
  width:25px;
  height:25px;
  right: calc(50% - 90px)
  

  `
const ContainerInpunt = styled.div`
  display: flex;
  width:100%;
  height:3rem;
  justify-content: center;
  align-items:center;
  
`

function TodoSearch({searchValue,setSearchValue}) {
  
  const onSearchValueChange = (e) => {
    
    setSearchValue(e.target.value);
    console.log(searchValue);
    

  }
  return (
    <ContainerInpunt>
        <Input 
        placeholder="Search task" 
        type="text" name="" id="" 
        value = {searchValue}
        onChange={onSearchValueChange}
        />
        <Icon src={Search_icon} alt="search icon" />
    </ContainerInpunt>
  )
}
export { TodoSearch};
