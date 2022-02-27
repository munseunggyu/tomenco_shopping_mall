import React from 'react';
import {Route,Link} from 'react-router-dom';
import styled from 'styled-components';

const MainHeadBlock = styled.div`
display: flex;
padding-top: 20px;
padding-bottom: 20px;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
width: 100%;
border-bottom: 1px solid #EEEEEE;
background:white;
z-index:5;
  button{
    font-size: 18px;
    font-weight:700;

  }
`

function MainHead({children}){
  return(
    
      <MainHeadBlock>
        <Link to="/">
          <button>{children}</button>
        </Link>
      </MainHeadBlock>
   
  )
}

export default MainHead;