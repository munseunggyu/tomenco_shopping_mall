import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MainHeadBlock = styled.header`
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
  h1{
    button{
    font-size: 18px;
    font-weight:700;
  }
  }
  
`

function MainHead({children}){
  return(
    <MainHeadBlock>
      <h1>
        <Link to="/">
          <button>{children}</button>
        </Link>
      </h1>
    </MainHeadBlock>
  )
}

export default MainHead;