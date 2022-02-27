import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";

const GobackBlock = styled.button`
  z-index:5;
  position:fixed;
  padding-top: 24px;
  top:0;
  font-weight:700;
  margin-left:1.6rem;
`

function Goback(){
const history = useHistory();

  return(
    <GobackBlock onClick={()=>{history.goBack()}}> 
      <IoIosArrowBack size='20' />
     </GobackBlock>  
  )
}

export default Goback;