import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

const GobackBlock = styled.button`
  z-index:6;
  position:fixed;
  padding-top: 20px;
  top:0;
  font-size:1.2rem;
  font-weight:700;
  margin-left:1.6rem;
`

function Goback(){
const history = useHistory();

  return(
    <GobackBlock onClick={()=>{history.goBack()}}> 
      이전
     </GobackBlock>  
  )
}

export default Goback;