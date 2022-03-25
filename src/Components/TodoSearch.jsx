import React from 'react';
import styled from 'styled-components';
import '../index.css'
import { IconContext } from "react-icons";

import { FaSearch } from 'react-icons/fa';

const Input = styled.input`
  position:relative;
  border:10rem;
  height: 1.5rem;
  width: 16rem;
  padding: 1rem;
  border-radius:1rem;
  border-color:#F3F0D7;
  outline:none;
    &::placeholder{
      color:grey;
    }
  
  
`
const ContainerInpunt = styled.div`
  display: flex;
  width:100%;
  height:3rem;
  justify-content: center;
  align-items:center;
  
`

function TodoSearch({searchValue,setSearchValue,loading}) {
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }
  return (
    <ContainerInpunt>
        <Input 
        placeholder="Search task" 
        type="text" name="" id="" 
        value = {searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
        />
        <IconContext.Provider value={{ className: "search_icon" }}>
          <FaSearch />
        </IconContext.Provider>
        
    </ContainerInpunt>
  )
}
export { TodoSearch};
